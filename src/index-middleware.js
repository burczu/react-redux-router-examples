import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import funkcji applyMiddleware
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk middleware
import thunk from 'redux-thunk';
import { firstReducer } from './reducers/firstReducer';
import { secondReducer } from './reducers/secondReducer';
import { Provider } from 'react-redux';

const reducers = combineReducers({
  first: firstReducer,
  second: secondReducer
});

// przekaż wynik działania funkcji "applyMiddleware" jako parametr funkcji "createStore"
const store = createStore(reducers, applyMiddleware(thunk/*, anotherMiddleware*/));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// przykład kreatora akcji
const changeData = () => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch({
      type: 'CHANGE_DATA',
      payload: {
        data: state.data + 2
      }
    })
  }
}
