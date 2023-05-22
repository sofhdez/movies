import { MovieCard } from "components/MovieCard";
import React, { useState, useEffect } from "react";

// const MovieDetails: React.FC<MovieExplainProp>

const MyFavorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<any[]>([]);

  useEffect(() => {
    // Cuando el componente se monta, obtener las películas favoritas del localStorage
    const storedFavorites = localStorage.getItem("favorites");
    console.log(storedFavorites);

    if (storedFavorites) {
      // Parsear los datos almacenados desde su formato en cadena
      setFavoriteMovies(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Mis Películas Favoritas</h2>
      {favoriteMovies.length > 0 ? (
        favoriteMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            path={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
            genreId={movie.genres[0].id}
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
