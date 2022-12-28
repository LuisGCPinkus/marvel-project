"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const crypto_1 = __importDefault(require("crypto"));
const config_1 = require("../config");
const getComics = async (req, res, next) => {
    try {
        let data = req.query;
        const date = new Date().toISOString();
        const hash = crypto_1.default.createHash("md5").update(date + config_1.config.privateKey + config_1.config.publicKey).digest("hex");
        let result = await axios_1.default.get(`https://gateway.marvel.com:443/v1/public/comics?ts=${date}&apikey=${config_1.config.publicKey}&hash=${hash}`, { params: Object.assign({}, data) });
        return res.status(200).json({
            message: result.data.data
        });
    }
    catch (error) {
        return res.status(400).json({
            message: {
                error: 400,
                description: "Invalid type of filter"
            }
        });
    }
};
const getComic = async (req, res, next) => {
    try {
        let id = req.params.id ? +req.params.id : 0;
        if (id) {
            const date = new Date().toISOString();
            const hash = crypto_1.default.createHash("md5").update(date + config_1.config.privateKey + config_1.config.publicKey).digest("hex");
            let result = await axios_1.default.get(`https://gateway.marvel.com:443/v1/public/comics/${id}?ts=${date}&apikey=${config_1.config.publicKey}&hash=${hash}`);
            return res.status(200).json({
                message: result.data.data
            });
        }
        else {
            return res.status(400).json({
                message: {
                    error: 400,
                    description: "Incorrect id"
                }
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: {
                error: 404,
                description: "Comics not found"
            }
        });
    }
};
exports.default = { getComics, getComic };
