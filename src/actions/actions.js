// dostępne w aplikacji typy trzymaj w stałych
// tip: możesz trzymać wszystkie typy w jednym module
// unikniesz konfliktów nazw
export const SET_DATA = 'SET_DATA';

// kreator akcji: funkcja zwracająca akcję
export function setData(data) {
  // akcja: obiekt posiadający typ
  return {
    type: SET_DATA,
    payload: {
      data // dane do zapisania w store
    }
  }
}
