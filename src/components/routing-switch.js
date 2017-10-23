import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/items/special" component={SpecialItem} />
          <Route path="/items/:itemId" component={Items} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h1>Home!!</h1>;
}

const SpecialItem = () => {
  return <h1>Specia Item!!</h1>;
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
