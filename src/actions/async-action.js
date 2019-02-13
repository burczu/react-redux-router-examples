import axios from 'axios';

export const GET_DATA_START = 'GET_DATA_START';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';

export function getData() {
  // dzięki redux thunk mamy dostęp do "dispatch" w kreatorze akcji
  return (dispatch) => {
    // pobieranie danych rozpoczęte (ustaw stan, na przykład isLoading = true)
    dispatch({ type: GET_DATA_START });

    axios.get('https:/api.text.com/data')
      // pobieranie zakończone sukcesem (zmień odpowiednio stan)
      .then(response => {
        dispatch({ type: GET_DATA_SUCCESS, payload: { data: response.data } })
      })
      // dla błędu też jest przewidziana akcja
      .catch(error => dispatch({ type: GET_DATA_ERROR, payload: { error } }))
  };
}
