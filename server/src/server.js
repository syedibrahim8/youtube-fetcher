import app from "./app.js"
import "./config/dbConnect.js"
import startFetcher from "./jobs/fetchVideos.job.js";
import dotenv from "dotenv";
dotenv.config();
startFetcher()
const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server is running on ${port}`));