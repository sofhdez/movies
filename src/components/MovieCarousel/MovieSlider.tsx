import React, { useEffect, useRef, useState } from "react";
import { CircularProgress } from "@mui/material";
import { MovieCard } from "components/MovieCard";
import "./MovieSlider.css";

interface MovieData {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: number[];
  // Añade aquí cualquier otro campo que necesites
}

// Asume que la prop "fetchMoviesFunction" es la función que vas a usar para traer las películas
const MovieSlider = ({ fetchMoviesFunction }: { fetchMoviesFunction: () => Promise<any> }) => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

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

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(event.pageX - sliderRef.current!.offsetLeft);
    setPrevTranslate(currentTranslate);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    event.preventDefault();

    const x = event.pageX - sliderRef.current!.offsetLeft;
    const moveX = x - startX;
    setCurrentTranslate(prevTranslate + moveX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="slider-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <div
          className="slider"
          ref={sliderRef}
          style={{
            transform: `translateX(${currentTranslate}px)`,
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
        >
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
