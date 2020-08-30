import {} from '../actions';

const initialState = {
  movies: [],
  movie: {},
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
