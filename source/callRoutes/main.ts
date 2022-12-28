import axios from 'axios';

async function getCharacters() {
    try {
        await axios.get(
            `http://localhost:6060/characters`,
            { params:  {"limit": 5} }
        ).then(response =>{
            console.log("getCharacters");
            console.log(response.data.message.results);
        });
    } catch (error) {
        return {
            message: {
                error: 400,
                description: error
            }
        };
    }
};

async function getCharacter() {
    try {
        await axios.get(
            `http://localhost:6060/characters/1011334`,
        ).then(response =>{
            console.log("getCharacter");
            console.log(response.data.message.results);
        });
    } catch (error) {
        return {
            message: {
                error: 400,
                description: error
            }
        };
    }
};

async function getComics() {
    try {
        await axios.get(
            `http://localhost:6060/comics`,
            { params:  {"limit": 5} }
        ).then(response =>{
            console.log("getComics");
            console.log(response.data.message.results);
        });
    } catch (error) {
        return {
            message: {
                error: 400,
                description: error
            }
        };
    }
};

async function getComic(){
    try {
        await axios.get(
            `http://localhost:6060/comics/82967`,
        ).then(response =>{
            console.log("getComic");
            console.log(response.data.message.results);
        });
    } catch (error) {
        return {
            message: {
                error: 400,
                description: error
            }
        };
    }
};

async function getSeries(){
    try {
        await axios.get(
            `http://localhost:6060/series`,
            { params:  {"limit": 5} }
        ).then(response =>{
            console.log("getSeries");
            console.log(response.data.message.results);
        });
    } catch (error) {
        return {
            message: {
                error: 400,
                description: error
            }
        };
    }
};

async function getSerie(){
    try {
        await axios.get(
            `http://localhost:6060/series/31445`,
        ).then(response =>{
            console.log("getSerie");
            console.log(response.data.message.results);
        });
    } catch (error) {
        return {
            message: {
                error: 400,
                description: error
            }
        };
    }
};


new Promise(async (resolve, reject) => {
    try{
        let result = await getCharacters();
        let result2 = await getCharacter();
        let result3 = await getComics();
        let result4 = await getComic();
        let result5 = await getSeries();
        let result6 = await getSerie();
        resolve(result)
    } catch(err) {
        reject(err);
    }
});