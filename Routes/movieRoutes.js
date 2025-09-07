import express from 'express'
const movieRoutes = express.Router()
import movieController from '../Controllers/movieController.js'

movieRoutes.get("/movies", movieController.getAllMovies)

movieRoutes.post("/movies", movieController.createMovie)

movieRoutes.delete("/movies/:id", movieController.Delete)

export default movieRoutes