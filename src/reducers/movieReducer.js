import _ from 'lodash';
import {
  NOMINATE_MOVIE,
  REMOVE_NOMINATION,
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  REMOVE_ALL_NOMINATIONS,
  CLEAR_SEARCH,
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
        error: null,
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
    case CLEAR_SEARCH:
      return {
        ...state,
        movies: [],
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
    case REMOVE_ALL_NOMINATIONS:
      return {
        ...state,
        nominations: [],
      };
    default:
      return state;
  }
}
