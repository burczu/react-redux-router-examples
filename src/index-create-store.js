import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// funkcja createStore jest częścią pakietu 'redux'
import { createStore } from 'redux';
import { reducer } from './reducers/reducer';

import { setData } from './actions/actions';

// komponent udostępniający "store" komponentom aplikacji
import { Provider } from 'react-redux';

// tworzenie store: wywołaj funkcję createStore i przekaż jej reducer(y)
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store umożliwia przyjmowanie akcji za pomocą metody dispatch:
store.dispatch({ type: 'TEST_ACTION' }); // czysta akcja
store.dispatch(setData({ text: 'test data' })); // kreator akcji

// "owiń" główny komponent aplikacji komponentem Provider i przekaż mu store:
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
