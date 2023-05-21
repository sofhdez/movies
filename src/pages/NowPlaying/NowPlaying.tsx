import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { MovieCard } from 'components/MovieCard';
import { getNowPlaying } from 'services';

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  
  const getNowPlayingMovies = async () => {
    setLoading(true)
    await getNowPlaying()
            .then((res) => {
              if (res && res.data) {
                setNowPlaying(res.data.results)
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
    getNowPlayingMovies()
  }, [])


  return (
    <div>
      {nowPlaying?.length > 0 ? (
        nowPlaying.map((movie) => (
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

export default NowPlaying