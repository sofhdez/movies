import React from 'react';
import {MovieSlider} from 'components/MovieCarousel';
import { getNowPlaying, getPopular, getTopRated } from 'services';
import Button from 'components/Button/Button';

import './Home.css';


const HomePage = () => {
  return (
    <div className="homepage">
      <div className="title-section">
        <h2>Más Votadas</h2>
        <Button text="Ver todas" link="/top-rated" /> {/* Ajusta el link según sea necesario */}
      </div>
      <MovieSlider fetchMoviesFunction={getTopRated} />

      <div className="title-section">
        <h2>Más Populares</h2>
        <Button text="Ver todas" link="/popular" />
      </div>
      <MovieSlider fetchMoviesFunction={getPopular} />

      <div className="title-section">
        <h2>Now Playing</h2>
        <Button text="Ver todas" link="/now-playing" />
      </div>
      <MovieSlider fetchMoviesFunction={getNowPlaying} />
    </div>
  );
}

export default HomePage;
