import express from "express"

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"test working"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

export default app;
