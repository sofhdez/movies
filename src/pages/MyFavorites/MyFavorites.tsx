import { MovieCard } from "components/MovieCard";
import { MovieExplainProp } from "./types";
import React, { useState, useEffect } from "react";

// const MovieDetails: React.FC<MovieExplainProp>

const MyFavorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<MovieExplainProp[]>([]);

  useEffect(() => {
    // Cuando el componente se monta, obtener las películas favoritas del localStorage
    const storedFavorites = localStorage.getItem("favoriteMovies");
    console.log(storedFavorites);

    if (storedFavorites) {
      // Parsear los datos almacenados desde su formato en cadena
      setFavoriteMovies(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div>
      <h2>Mis Películas Favoritas</h2>
      {favoriteMovies.length > 0 ? (
        favoriteMovies.map((movie) => (
          <MovieCard
            path={movie.path}
            title={movie.title}
            voteAverage={movie.voteAverage}
            genreId={movie.genreId}
            id={movie.id}
          />
        ))
      ) : (
        <p>No tienes ninguna película favorita aún.</p>
      )}
    </div>
  );
};

export default MyFavorites;
