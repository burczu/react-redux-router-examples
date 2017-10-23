import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { firstReducer } from './reducers/firstReducer';
import { secondReducer } from './reducers/secondReducer';
import { Provider } from 'react-redux';

// combineReducers łączy reducery
// stan w nich zawarty będzie dostepny przez nazwę właściwości - this.props.first.data
const reducers = combineReducers({
  first: firstReducer,
  second: secondReducer
});

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
