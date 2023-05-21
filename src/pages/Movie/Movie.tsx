import { CircularProgress } from "@mui/material";
import { MovieDetails } from "components/MovieDetails";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "services";

const MovieDetailPage = () => {
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getMovieInfo = async () => {
    setLoading(true);
    try {
      const res = await getMovieDetails(Number(id));
      if (res && res.data) {
        setMovie(res.data);
        // console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovieInfo();
  }, [id]); // Dependencia de useEffect es 'id' para que se ejecute cada vez que cambie el id

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : movie ? (
        <MovieDetails
          path={movie.poster_path}
          adult={movie.adult}
          overview={movie.overview}
          title={movie.title}
          voteAverage={movie.vote_average}
          genreId={movie.genre_ids?.[0]}
          releaseDate={movie.release_date}
          runtime={movie.runtime}
          voteCount={movie.vote_count}
          id={movie.id}
        />
      ) : (
        <p>No se encontró la película</p>
      )}
    </div>
  );
};

export default MovieDetailPage;
