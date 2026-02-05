import axios from "axios";
import videoModel from "../models/Video.js";
import { getKey,rotateKey } from "../utils/apiKeyManager.js";
import dotenv from "dotenv";
dotenv.config();

const fetchVideos = async () => {
    try {
       const response = await axios.get("https://www.googleapis.com/youtube/v3/search",{
        params:{
            key:getKey(),
            part:"snippet",
            q:process.env.SEARCH_QUERY,
            type:"video",
            order:"date",
            maxResults:25,   
        }
       })
       const videos = response.data.items

       for(let vid of videos){
        await videoModel.updateOne({videoId:vid.id.videoId},{
            videoId:vid.id.videoId,
            title:vid.snippet.title,
            description:vid.snippet.description,
            publishedAt:vid.snippet.publishedAt,
            thumbnails:vid.snippet.thumbnails,
            channelTitle:vid.snippet.channelTitle,
            tags:vid.snippet.tags,
            url:`https://www.youtube.com/watch?v=${vid.id.videoId}`,
            fetchedAt: new Date()
        },{upsert:true})
       }
       console.log(`Fetched ${videos.length} videos`);
    } catch (error) {
        if(error.response?.status === 403){
            rotateKey();
            console.log("API key rotated");
        }else{
            console.error("Fetch error",error.message);
        }
    }
}

export default fetchVideos;