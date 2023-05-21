import React from "react";
import { IMAGE_SOURCE, movies } from "constants/moviesMock";
import genres from "constants/genres.json";
// MovieCardProp is an interface that we will create in the next step
import { MovieExplainProp } from "./types";
import StarIcon from '@mui/icons-material/Star';
// StyleComponents

  // Components
import GenreLabel from "components/GenreLabel/GenreLabel";
import { Link } from "react-router-dom";

// FC = Functional Component
// MovieCardProp = Interface
const MovieDetails: React.FC<MovieExplainProp> = ({
  path,
  title,
  voteAverage,
  genreId,
  id
}) => {
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
    

  return (
    <div>
        <h1>{title}</h1>
    </div>
  );
};

export default MovieDetails;
