import app from "./app.js"
import "./config/dbConnect.js"
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server is running on ${port}`));