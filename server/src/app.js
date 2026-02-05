import express from "express"
import router from "./routes/video.routes.js";

const app = express();
app.use(express.json())

app.use("/api/videos",router)

export default app;
