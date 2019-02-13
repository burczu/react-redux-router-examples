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
  firstState: firstReducer,
  secondState: secondReducer
});

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));



// później w komponencie App:
class App extends React.Component {
  render() {
    // dostęp do części statnu obsługiwanej przez firstReducer
    return <div>{this.props.firstState}</div>;
  }
}

const mapStateToProps = (state) => ({
  ...state,

  // albo (dostęp tylko do części stanu obsługiwanej przez firstReducer)
  // firstState: state.firstState
});

const mapDispatchToProps = (dispatch) => {};

connect(mapStateToProps, mapDispatchToProps)(App);
