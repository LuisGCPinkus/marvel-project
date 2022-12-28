import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import crypto from 'crypto';
import { config } from '../config'
import { ListFilterParams } from './comics-dtos';

const getComics = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let data: ListFilterParams = req.query;
       
        const date: string = new Date().toISOString();
        const hash: string = crypto.createHash("md5").update(date+config.privateKey+config.publicKey).digest("hex")
        let result: AxiosResponse = await axios.get(
            `https://gateway.marvel.com:443/v1/public/comics?ts=${date}&apikey=${config.publicKey}&hash=${hash}`,
            { params:  {...data} }
        );
        return res.status(200).json({
            message: result.data.data
        });
    } catch (error) {
        return res.status(400).json({
            message: {
                error: 400,
                description: "Invalid type of filter"
            }
        });
    }
};

const getComic = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let id: number = req.params.id ? +req.params.id : 0; 
        if(id){
            const date: string = new Date().toISOString();
            const hash: string = crypto.createHash("md5").update(date+config.privateKey+config.publicKey).digest("hex")
            let result: AxiosResponse = await axios.get(
                `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=${date}&apikey=${config.publicKey}&hash=${hash}`
            );
            return res.status(200).json({
                message: result.data.data
            });
        }else{
            return res.status(400).json({
                message: {
                    error: 400,
                    description: "Incorrect id"
                }
            });
        }
    } catch (error) {
        return res.status(404).json({
            message: {
                error: 404,
                description: "Comics not found"
            }
        });
    }
}; 

export default { getComics, getComic };