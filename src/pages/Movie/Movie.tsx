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
  const [isFavorite, setIsFavorite] = useState(false);
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
      const favoritesList = JSON.parse(storedFavorites);
      setFavorites(favoritesList);
      // Comprueba si la película actual ya está en los favoritos
      setIsFavorite(
        favoritesList.some((favMovie: any) => favMovie.id === Number(id))
      );
    }
  }, [getMovieInfo, id]); // Y aquí pasas getMovieInfo y id como dependencias a useEffect

  const addFavorite = (movie: any) => {
    // Check if movie is already in favorites
    const alreadyFavorite = favorites.some(
      (favoriteMovie: any) => favoriteMovie.id === movie.id
    );

    if (!alreadyFavorite) {
      const newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(true); // Marcamos la película como favorita
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
          onAddFavorite={() => addFavorite(movie)}
          isFavorite={isFavorite} // Pasamos isFavorite a MovieDetails
        />
      ) : (
        <p>No se encontró la película</p>
      )}

      <h2>RECOMMENDATIONS</h2>
      <MovieSlider
        key={id}
        fetchMoviesFunction={() => getRecommendations(Number(id))}
      />
    </div>
  );
};

export default MovieDetailPage;
