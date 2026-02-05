import cron from "node-cron";
import fetchVideos from "../services/youtube.service.js";

const startFetcher = () =>{
    cron.schedule("*/10 * * * * *",async()=>{
        await fetchVideos();
        console.log("Fetching at",new Date().toISOString());
    })
    console.log("Video fetcher started");
}

export default startFetcher;