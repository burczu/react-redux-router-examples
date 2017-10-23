import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>

        <Route exact path="/" component={Home} />
        <Route path="/items/:itemId" component={Items} />
      </div>
    </Router>
  );
}

const Home = () => {
  return <h1>Home!!</h1>;
}

const Items = (props) => {
  return (
    <div>
      <h1>Items!!</h1>
      <p>Item id = {props.match.params.itemId}</p>
    </div>
  );
}
}

ReactDOM.render(<App />, document.getElementById('root'));
