import React from 'react';
import {MovieCarousel} from 'components/MovieCarousel';
import { getNowPlaying, getPopular, getTopRated } from 'services';


const HomePage = () => {
  return (
    <div>
      <h2>Más Votadas</h2>
      <MovieCarousel fetchMoviesFunction={getTopRated} />

      <h2>Más Populares</h2>
      <MovieCarousel fetchMoviesFunction={getPopular} />

      <h2>Now Playing</h2>
      <MovieCarousel fetchMoviesFunction={getNowPlaying} />
    </div>
  );
}

export default HomePage;
