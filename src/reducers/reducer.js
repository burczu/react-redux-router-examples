// import akcji, ponieważ potrzebujemy stałych typów
import { SET_DATA } from '../actions/actions';

// stan początkowy - zwykle deklarujemy w tym samym pliku co reducer
const initialState = {
  data: {}
};

// funkcja reducera - umie zmieniać stan w zależności od przekazanej akcji
export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      // ZAWSZE zwracaj nowy obiekt będący nową, zmodyfikowaną wersją stanu!!
      return { ...state, data: action.payload.data };
    default:
      return { ...state };
  }
}
