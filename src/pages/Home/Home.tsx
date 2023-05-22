import React from "react";
import { MovieSlider } from "components/MovieCarousel";
import { getNowPlaying, getPopular, getTopRated } from "services";
import Button from "components/Button/Button";
import { HomeDiv, TitleSection } from "./style";

const HomePage = () => {
  return (
    <HomeDiv>
      <TitleSection>
        <h2>Top Rated</h2>
        <Button text="Show more" link="/top-rated" />{" "}
      </TitleSection>
      <MovieSlider fetchMoviesFunction={getTopRated} />

      <TitleSection>
        <h2>Popular</h2>
        <Button text="Show more" link="/popular" />
      </TitleSection>
      <MovieSlider fetchMoviesFunction={getPopular} />

      <TitleSection>
        <h2>Now Playing</h2>
        <Button text="Show more" link="/now-playing" />
      </TitleSection>
      <MovieSlider fetchMoviesFunction={getNowPlaying} />
    </HomeDiv>
  );
};

export default HomePage;
