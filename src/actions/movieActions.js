import axios from 'axios';

export const NOMINATE_MOVIE = 'NOMINATE_MOVIE';

export const nominateMovie = (movie) => (dispatch) => {
  dispatch({ type: NOMINATE_MOVIE, payload: movie });
};

export const REMOVE_NOMINATION = 'REMOVE_NOMINATION';

export const removeNomination = (movie) => (dispatch) => {
  dispatch({ type: REMOVE_NOMINATION, payload: movie });
};

export const REMOVE_ALL_NOMINATIONS = 'REMOVE_ALL_NOMINATIONS';

export const removeAllNominations = () => (dispatch) => {
  dispatch({ type: REMOVE_ALL_NOMINATIONS });
};

export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_ERROR = 'SEARCH_MOVIES_ERROR';

export const searchMovies = (query) => async (dispatch) => {
  dispatch({ type: SEARCH_MOVIES });

  try {
    let { data } = await axios.get(
      `https://www.omdbapi.com/?s=${query}&type=movie&apikey=${process.env.REACT_APP_KEY}`
    );

    let cache = new Set();

    let movies = await Promise.all(
      data.Search.map(async (movie) => {
        if (cache.has(movie.Title)) {
          return;
        } else {
          cache.add(movie.Title);
        }

        try {
          let img = await axios.get(
            `https://img.omdbapi.com/?i=${movie.imdbID}&apikey=${process.env.REACT_APP_KEY}`,
            {
              responseType: 'blob',
            }
          );

          return {
            ...movie,
            image: img.data,
          };
        } catch (err) {
          return {
            ...movie,
            image: null,
          };
        }
      })
    );

    dispatch({
      type: SEARCH_MOVIES_SUCCESS,
      payload: movies.filter((m) => m !== undefined),
    });
  } catch (err) {
    dispatch({ type: SEARCH_MOVIES_ERROR, payload: err });
  }
};

export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const clearSearch = () => (dispatch) => {
  dispatch({ type: CLEAR_SEARCH });
};
