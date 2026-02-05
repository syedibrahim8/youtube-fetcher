import express from "express"
import router from "./routes/video.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express();
app.use(express.json())
app.use("/api/videos", router)

const buildPath = path.join(__dirname,"dist")
app.use(express.static(buildPath))

app.get("*",(req,res)=>{
    res.sendFile(path.join(buildPath,"index.html"))
})

export default app;