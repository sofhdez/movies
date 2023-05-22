import React, { useState } from "react";
import { IMAGE_SOURCE, movies } from "constants/moviesMock";
import genres from "constants/genres.json";
// MovieCardProp is an interface that we will create in the next step
import { MovieExplainProp } from "./types";

// StyleComponents
import "./MovieDetails.css";

import GenreLabel from "components/GenreLabel/GenreLabel";
import {
  MovieDetailsContainer,
  MovieDetailsInfo,
  MovieDetailsSubInfo,
  MovieDetailsSubInfoText,
  MovieDetailsText,
  MovieDetailsTitle,
} from "./style";

const MovieDetails: React.FC<MovieExplainProp> = ({
  path,
  adult,
  overview,
  title,
  voteAverage,
  genreId,
  releaseDate,
  runtime,
  voteCount,
  id,
  onAddFavorite,
  isFavorite,
}) => {
  const [favorite, setIsFavorite] = useState(false);

  const handleAddFavorite = () => {
    setIsFavorite(true);
    onAddFavorite();
  };

  const poster = IMAGE_SOURCE + path;

  const getGenre = (genreId: number) => {
    const key: any = Object.keys(genres.genres).find(
      (genre: any): boolean => genres.genres[genre].id === genreId
    );
    if (key) {
      return genres.genres[key].name;
    }
    return "Not Classified";
  };

  const getRatingColor = (voteAverage: number) => {
    if (voteAverage >= 7) {
      return "#4CAF50";
    } else if (voteAverage >= 5) {
      return "#FFC107";
    } else {
      return "#D45550";
    }
  };

  const getForAdult = (adult: boolean) => {
    if (adult) {
      return "No";
    } else {
      return "Yes";
    }
  };

  return (
    <MovieDetailsContainer>
      <img src={poster} alt={title} style={{ height: "600px" }} />
      <MovieDetailsInfo>
        <MovieDetailsTitle>{title}</MovieDetailsTitle>
        <MovieDetailsSubInfo>
          <MovieDetailsSubInfoText>
            For adults: {getForAdult(adult)}
          </MovieDetailsSubInfoText>
          <MovieDetailsSubInfoText>Runtime: {runtime}</MovieDetailsSubInfoText>
          <MovieDetailsSubInfoText>
            Release date: {releaseDate}
          </MovieDetailsSubInfoText>
          <MovieDetailsSubInfoText
            style={{ color: getRatingColor(voteAverage) }}
          >
            Rating: {voteAverage} / 10
          </MovieDetailsSubInfoText>
          <p>Vote Count: {voteCount}</p>
        </MovieDetailsSubInfo>
        <MovieDetailsText>{overview}</MovieDetailsText>
        <MovieDetailsText>Genre: {getGenre(genreId)}</MovieDetailsText>
        <button
          className={`details-fav ${isFavorite ? "details-fav--active" : ""}`}
          onClick={onAddFavorite}
        >
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>
      </MovieDetailsInfo>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
