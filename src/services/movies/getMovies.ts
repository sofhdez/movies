import httpInstance from "services/httpInstance";

export const getPopular = async () => {
  let res: any;
  const endpoint = `/popular?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US;`;

  await httpInstance
    .get(endpoint)
    .then((data) => {
      res = data;
    })
    .catch((err) => {
      res = err.response;
    });
  return res;
};

export const getNowPlaying = async () => {
  let res: any;
  const endpoint = `/now_playing?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US;`;

  await httpInstance
    .get(endpoint)
    .then((data) => {
      res = data;
    })
    .catch((err) => {
      res = err.response;
    });
  return res;
};

export const getTopRated = async () => {
  let res: any;
  const endpoint = `/top_rated?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US;`;

  await httpInstance
    .get(endpoint)
    .then((data) => {
      res = data;
    })
    .catch((err) => {
      res = err.response;
    });
  return res;
};

export const getMovieDetails = async (id: number) => {
  let res: any;
  const endpoint = `/${id}?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US;`;

  await httpInstance
    .get(endpoint)
    .then((data) => {
      res = data;
    })
    .catch((err) => {
      res = err.response;
    });
  return res;
};

export const getRecommendations = async (id: number) => {
  let res: any;
  const endpoint = `/${id}/recommendations?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US;`;

  await httpInstance
    .get(endpoint)
    .then((data) => {
      res = data;
    })
    .catch((err) => {
      res = err.response;
    });
  return res;
};
