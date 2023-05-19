import React from 'react'
import { ShowLabel } from './styles'
import { GenreLabelProp } from './types';

const GenreLabel: React.FC<GenreLabelProp> = ({genre, color="#f44"}) => (
        <ShowLabel color={color}>{genre}</ShowLabel>
    );

export default GenreLabel;

// export const GenreLabel = ({genre}: string) => {
//   return (
//     <ShowLabel>{genre}</ShowLabel>
//   )
// }
