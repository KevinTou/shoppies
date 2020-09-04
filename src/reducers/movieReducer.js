import _ from 'lodash';
import {
  NOMINATE_MOVIE,
  REMOVE_NOMINATION,
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
} from '../actions';

const initialState = {
  movies: [],
  movie: {},
  nominations: [],
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...action.payload],
        isLoading: false,
      };
    case SEARCH_MOVIES_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case NOMINATE_MOVIE:
      return {
        ...state,
        nominations: [...state.nominations, action.payload],
      };
    case REMOVE_NOMINATION:
      return {
        ...state,
        nominations: [
          ...state.nominations.filter(
            (movie) => !_.isEqual(movie, action.payload)
          ),
        ],
      };
    default:
      return state;
  }
}
