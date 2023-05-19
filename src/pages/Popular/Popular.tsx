import { CircularProgress } from '@mui/material';
import { MovieCard } from 'components/MovieCard';
import React, {useEffect, useState} from 'react'
import { getPopular } from 'services';

const Popular = () => {
  const [populars, setPopular] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getPopularMovies = async () => {
    setLoading(true)
    await getPopular()
            .then((res) => {

              // If the response exists and the data exists, set the popular state to the data
              if (res && res.data) {
                setPopular(res.data.results)
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
    getPopularMovies()
    // add more endpoints here
  }, []) // only run once with []
  // every times [popular] changes, useEffect will run

  return (
    <div>
      {populars?.length > 0 ? (
        populars.map((movie) => (
          <MovieCard
            key={movie.id}
            path={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
            genreId={movie.genre_ids[0]}
          />
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default Popular