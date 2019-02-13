import * as actions from '../actions/async-actions';

const initialState = {
  data: {}, // początkowo data to pusty obiekt
  isLoading: false, // przechowujemy informację, że aplikacja ładuje dane
  isError: false, // przechowujemy informację, czy wystąpiły błędy ładowania
};

export function reducer(state = initialState, action) {
  switch (action) {
    case actions.GET_DATA_START:
      return { ...state, isLoading: true, isError: false };
    case actions.GET_DATA_SUCCESS:
      return { ...state, isLoading: false, isError: false, data: action.payload.data };
    case actions.GET_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
