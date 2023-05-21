import { CircularProgress } from "@mui/material";
import { MovieSlider } from "components/MovieCarousel";
import { MovieDetails } from "components/MovieDetails";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getRecommendations } from "services";

const MovieDetailPage = () => {
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(false);
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
  }, [getMovieInfo]); // Y aquí pasas getMovieInfo como dependencia a useEffect

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
        />
      ) : (
        <p>No se encontró la película</p>
      )}

      <h2>RECOMMENDATIONS</h2>
      <MovieSlider fetchMoviesFunction={() => getRecommendations(Number(id))} />
    </div>
  );
};

export default MovieDetailPage;
