import Movie from "../Models/Movies.js";

class movieService{
    async getAll(){
        try{
            const movies = await Movie.find();
            return movies;
        } catch(error){
            console.log(error);
        }
    }

    async Create(title, genre, year){
        try{
            const newMovie = new movie({
                title,
                genre,
                year
            })
            await newMovie.save()
        } catch(error) {
            console.log(error)
        }
    } 

    async Delete(id){
        try{
            await Movie.findByIdAndDelete(id)
            console.log(`Game com a id: ${id} foi deletado.`)
        } catch (error){
            console.log(error)
        }
    }

    async Update(id, title, genre, year){
        try{
            const updateMovie = await movie.findByIdAndUpdate(
                id,
                {
                    title,
                    genre,
                    year
                },
                {new:true}
            )
            console.log(`Filme com a ID ${id} foi alterado`)
            return updateMovie;
        }catch(error){
            console.log(error)
        }
    }
}

export default new movieService;