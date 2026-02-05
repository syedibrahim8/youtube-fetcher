import express from "express";
import {getVideos,searchVideos} from "../controllers/video.controller.js"

const router = express.Router()

router.get("/",getVideos);
router.get("/search",searchVideos);

export default router;
