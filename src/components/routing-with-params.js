import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/items/:itemId" component={Items} /> // "itemId" będzie dostępny w "props"
      </div>
    </Router>
  );
};

const Home = () => {
  return <h1>Home!!</h1>;
};

const Items = (props) => {
  const ids = [1, 2, 3, 4];
  // do parametrów można dobrać się przy pomocy "props.match.params"
  const currentItem = parseInt(props.match.params.itemId, 10);

  if (ids.indexOf(currentItem) === -1) {
    // sposób na przekierowanie
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Items!!</h1>
      <p>Item id = {currentItem}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
