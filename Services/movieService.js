import Movie from "../Models/Movies.js";

class MovieService {
    async getAll() {
        try {
            const movies = await Movie.find();
            return movies;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async create(title, genre, year) {
        try {
            const newMovie = new Movie({
                title,
                genre,
                year
            });
            await newMovie.save();
            return newMovie;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(id) {
        try {
            await Movie.findByIdAndDelete(id);
            console.log(`Filme com a id: ${id} foi deletado.`);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id, title, genre, year) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(
                id,
                { title, genre, year },
                { new: true }
            );
            console.log(`Filme com a ID ${id} foi alterado`);
            return updatedMovie;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default new MovieService();