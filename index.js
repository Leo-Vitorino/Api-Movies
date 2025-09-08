import express from "express";
import mongoose from "mongoose";
import Movie from "./Models/Movies.js";
import movieRoutes from "./Routes/movieRoutes.js";

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rotas
app.use("/", movieRoutes);

// Conexão com o MongoDB (local ou Atlas)
mongoose.connect("mongodb://localhost:27017/API-Movies")
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("❌ Erro ao conectar ao MongoDB:", err));

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em: http://localhost:${port}.`);
});

// Rota inicial
app.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({ movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});