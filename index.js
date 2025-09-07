import express from "express";
const app = express();
import mongoose from "mongoose";
import Movie from "./Models/Movies.js"
import movieRoutes from "./Routes/movieRoutes.js";

app.use(express.urlencoded({extended: false}))
app.use(express.json)
app.use("/", movieRoutes)

mongoose.connect("mongodb://localhost:27017/API-Movies")
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = 4000;
app.listen(port, (error) => {
    if(error){
        console.log(error);
    }
    console.log(`API rodando em: http://localhost:${port}.`);
})

app.get("/", async (req, res) => {
    try{
        const movies = await movie.find();
        res.status(200).json({movies: movies})
    } catch(error){
        console.log(error);
        res.status(500).json({error: "Erro interno do servidor."})
    }
})