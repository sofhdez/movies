import { CircularProgress } from '@mui/material';
import { MovieCard } from 'components/MovieCard';
import React, {useEffect, useState} from 'react'
import { getTopRated } from 'services';

const TopRated = () => {
  const [topRated, setTopRated] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getTopRatedMovies = async () => {
    setLoading(true)
    await getTopRated()
            .then((res) => {
              if (res && res.data) {
                setTopRated(res.data.results)
                console.log(res.data.results)
              }
            })
            .catch((err) => {
              console.log(err)
            }
          )
      setLoading(false)
  }

  useEffect(() => {
    getTopRatedMovies()
  }, [])

  return (
    <div>
      {topRated?.length > 0 ? (
        topRated.map((movie) => (
          <MovieCard
            key={movie.id}
            path={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
            genreId={movie.genre_ids[0]}
            id={movie.id}
          />
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default TopRated