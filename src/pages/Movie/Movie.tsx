import { CircularProgress } from "@mui/material";
import { MovieSlider } from "components/MovieCarousel";
import { MovieDetails } from "components/MovieDetails";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getRecommendations } from "services";

const MovieDetailPage = () => {
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState<any[]>([]);
  const { id } = useParams();

  const getMovieInfo = useCallback(async () => {
    setLoading(true);
    const response = await getMovieDetails(Number(id));
    if (response && response.data) {
      setMovie(response.data);
    }
    setLoading(false);
  }, [id]); // Aquí pasas las dependencias de getMovieInfo

  useEffect(() => {
    getMovieInfo();
    // Obtenemos las películas favoritas del localStorage cuando se carga el componente
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, [getMovieInfo]); // Y aquí pasas getMovieInfo como dependencia a useEffect

  const addFavorite = (movie: any) => {
    // Check if movie is already in favorites
    const alreadyFavorite = favorites.some(
      (favoriteMovie: any) => favoriteMovie.id === movie.id
    );

    if (!alreadyFavorite) {
      const newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  const removeFavorite = (movie: any) => {
    const newFavorites = favorites.filter(
      (favoriteMovie: any) => favoriteMovie.id !== movie.id
    );

    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const handleFavoriteClick = () => {
    const alreadyFavorite = favorites.some(
      (favoriteMovie: any) => favoriteMovie.id === movie.id
    );

    if (alreadyFavorite) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      {loading ? (
        <CircularProgress />
      ) : movie ? (
        <MovieDetails
          path={movie.poster_path}
          adult={movie.adult}
          overview={movie.overview}
          title={movie.title}
          voteAverage={movie.vote_average}
          genreId={movie.genres[0].id}
          releaseDate={movie.release_date}
          runtime={movie.runtime}
          voteCount={movie.vote_count}
          id={movie.id}
          onAddFavorite={handleFavoriteClick}
          isFavorite={favorites.some(
            (favoriteMovie: any) => favoriteMovie.id === movie.id
          )}
        />
      ) : (
        <p>Movie not found</p>
      )}

      <h2>Recommendations</h2>
      <MovieSlider
        key={id}
        fetchMoviesFunction={() => getRecommendations(Number(id))}
      />
    </div>
  );
};

export default MovieDetailPage;
