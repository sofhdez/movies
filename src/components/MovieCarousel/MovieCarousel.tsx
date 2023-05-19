import { CircularProgress } from "@mui/material";
import { MovieCard } from "components/MovieCard";
import React, { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface MovieData {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: number[];
  // Añade aquí cualquier otro campo que necesites
}

// Función para dividir el array de testimonios en subarreglos de tamaño 3
function chunkArray(arr: MovieData[], chunkSize: number): MovieData[][] {
  const result: MovieData[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

// Asume que la prop "fetchMoviesFunction" es la función que vas a usar para traer las películas
const MovieCarousel = ({ fetchMoviesFunction }: { fetchMoviesFunction: () => Promise<any> }) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    await fetchMoviesFunction()
      .then((res) => {
        if (res && res.data) {
          setMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const movieChunks = chunkArray(movies, 5);

  return (
    <div>
      {loading ? <CircularProgress /> : (
        <Carousel showThumbs={false} dynamicHeight={true} infiniteLoop showArrows autoPlay interval={5000} transitionTime={500}>
          {movieChunks.map((chunk, index) => (
            <div key={`slide-${index}`}>
              {chunk.map((movie) => (
                <MovieCard
                  key={movie.id}
                  path={movie.poster_path}
                  title={movie.title}
                  voteAverage={movie.vote_average}
                  genreId={movie.genre_ids[0]}
                />
              ))}
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default MovieCarousel;
