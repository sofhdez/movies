import React from 'react';
import {MovieSlider} from 'components/MovieCarousel';
import { getNowPlaying, getPopular, getTopRated } from 'services';


const HomePage = () => {
  return (
    <div>
      {/* Add button to the page */}
      <h2>Más Votadas</h2>
      <MovieSlider fetchMoviesFunction={getTopRated} />

      <h2>Más Populares</h2>
      <MovieSlider fetchMoviesFunction={getPopular} />

      <h2>Now Playing</h2>
      <MovieSlider fetchMoviesFunction={getNowPlaying} />
    </div>
  );
}

export default HomePage;
