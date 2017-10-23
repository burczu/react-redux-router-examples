import * as actions from '../actions/async-actions';

const initialState = {
  data: {},
  isLoading: false,
  isError: false
};

export function reducer(state = initialState, action) {
  switch (action) {
    case actions.GET_DATA_START:
      return { ...state, isLoading: true };
    case actions.GET_DATA_SUCCESS:
      return { ...state, isLoading: false, data: action.payload.data };
    case actions.GET_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
