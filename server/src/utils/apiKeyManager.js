import dotenv from "dotenv";
dotenv.config();

const keys = process.env.YOUTUBE_API_KEYS.split(",")
let index = 0;

const getKey = () => keys[index]

const rotateKey = () => {
    index = (index+1)%keys.length;
}

export {getKey,rotateKey};