import React, { useEffect, useState, useRef } from "react";
import { CircularProgress } from "@mui/material";
import { MovieCard } from "components/MovieCard";
import "./MovieSlider.css";

interface MovieData {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: number[];
}

const MovieSlider = ({ fetchMoviesFunction }: { fetchMoviesFunction: () => Promise<any> }) => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

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
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    sliderRef.current!.scrollLeft += e.deltaY;
  }

  return (
    <div className="slider-container" ref={sliderRef} onWheel={handleWheel}>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="slider">
          {movies.map((movie) => (
            <div key={movie.id} className="slider-item">
              <MovieCard
                path={movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                genreId={movie.genre_ids[0]}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieSlider;
