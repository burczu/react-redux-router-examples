import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} /> // "exact" czyli dokładne dopasowanie
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

const Home = () => {
  return <h1>Home!!</h1>;
};

// komponent z zagnieżdżonym route!
const About = () => {
  return (
      <div>
        <h1>About!!</h1>
        <Link to="/">Home</Link>
        <Route path="/about/nested" component={Nested} />
      </div>
  );
};

const Nested = () => {
  return <h1>Nested!!</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));
