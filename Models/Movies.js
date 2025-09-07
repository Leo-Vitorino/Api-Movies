import mongoose, { mongo } from 'mongoose'

const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    year: Number,
})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie;