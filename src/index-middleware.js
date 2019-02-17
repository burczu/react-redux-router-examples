import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import funkcji applyMiddleware
import { createStore, applyMiddleware } from 'redux';
// import thunk middleware
import thunk from 'redux-thunk';
import { reducer } from './reducers/reducer';
import { Provider } from 'react-redux';

// przekaż wynik działania funkcji "applyMiddleware" jako parametr funkcji "createStore"
const store = createStore(reducer, applyMiddleware(thunk/*, anotherMiddleware*/));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// przykład kreatora akcji
const changeData = () => {
  return (dispatch, getState) => {
    // możmey dostać się do state z poziomu kreatora akcji!
    const state = getState();

    // możemy też wywoływać inne akcje
    dispatch({
      type: 'CHANGE_DATA',
      payload: {
        data: state.data + 2
      }
    })
  };
};
