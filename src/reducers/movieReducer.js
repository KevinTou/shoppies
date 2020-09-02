import {} from '../actions';

const initialState = {
  movies: [1, 2, 3],
  movie: {},
  nominations: [],
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
