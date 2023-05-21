import React from "react";
import { IMAGE_SOURCE } from "constants/moviesMock";
import genres from "constants/genres.json";
// MovieCardProp is an interface that we will create in the next step
import { MovieCardProp } from "./types";
import StarIcon from '@mui/icons-material/Star';
// StyleComponents
import { ImageContainer, 
  InfoShow, 
  ShowBox, 
  ShowCalification, 
  ShowLabelTitle, 
  ShowThumb, 
  ShowTitle } from "./styles";
  // Components
import GenreLabel from "components/GenreLabel/GenreLabel";

// FC = Functional Component
// MovieCardProp = Interface
const MovieCard: React.FC<MovieCardProp> = ({
  path,
  title,
  voteAverage,
  genreId,
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
    <ShowBox>
      <ImageContainer>
        <ShowThumb src={poster} />
      </ImageContainer>
      <InfoShow>
        <ShowTitle>
          <GenreLabel genre={getGenre(genreId)} color={getRatingColor(voteAverage)} />
          <ShowLabelTitle>{title}</ShowLabelTitle>
          <ShowCalification>
            <StarIcon /> 
            <span>
              {voteAverage} / 10
            </span>
            </ShowCalification>
        </ShowTitle>
      </InfoShow>
    </ShowBox>
  );
};

export default MovieCard;
