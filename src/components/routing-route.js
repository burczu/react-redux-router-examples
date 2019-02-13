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
        // najprostszy sposób - referencja do komponentu
        <Route exact path="/" component={Home} />

        // render props
        // przydatne jeśli chcemy przekazać dodatkowe parametry
        // lub dodać jakiś warunek i w zależności od niego renderować
        // różne komponenty
        // ważne aby pamiętać o ręcznym przekazaniu "propsów"
        <Route path="/about" render={(props) => <About {...props} />} />

        // children - podobne do render, z tą różnicą, że funkcja wywoływana jest
        // niezależnie czy "path" pasuje do aktualnej ścieżki czy nie
        <Route path="/other">
          {(props) => <Other {...props} />}
        </Route>
      </div>
    </Router>
  );
};

const Home = (props) => {
  const {
    // zawiera informacje czy ścieżka pasuje do aktualnego URL
    match: {
      params, // parametry
      isExact, // czy cały URL pasuje
      path, // dopasowanie z Route
      url, // dopasowana część URL'a
    },

    // informacje gdzie obecnie znajduje się aplikacja
    location: {
      key, // klucz nadawany przez router
      pathname, // ścieżka względna
      search, // query string
      hash, // wartość typu "#link-do-id"
      state, // do location można dodać stan, który będzie dostępny w komponencie
    },

    // historia przeglądarki, przydatne na przykład do przekierowań
    // np.: history.push('/');
    history,
  } = props;

  return <h1>Home!!</h1>;
};
const About = () => <h1>About!!</h1>;
const Other = () => <h1>Other!!</h1>;

ReactDOM.render(<App />, document.getElementById('root'));
