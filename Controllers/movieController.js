import movieService from "../Services/movieService.js";

const getAllMovies = async (req, res) => {
    try{
        const movies = await movieService.getAll();
        res.status(200).json({movies:movies});
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Erro interno do servidor."}); 
    }
};

const createMovie = async (req, res) => {
    try{
        const {title, genre, year} = req.body;
        await gameService.Create(title,genre,year);
        res.sendStatus(201);
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor."})    }
}

const Delete = async (req, res) => {
    try {
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            gameService.Delete(id)
            res.sendStatus(204)
        }else{
            res.sendStatus(400)
        }
    }catch(error){
        console.log(error)
        res.status(500).json({error: `Erro interno do servidor.`})
    }
}

export default {getAllMovies, createMovie, Delete}