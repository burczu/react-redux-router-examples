import React from 'react';
import PropTypes from 'prop-types';

// komponent funkcyjny
const Component = (props) => { // nazwa z wielkiej litery!
  return <p>{props.text}</p>; // props zawiera dane z atrybutów
};

// kontrola typu przekazanej wartości
Component.propTypes = {
  text: PropTypes.string.isRequired
};

// użycie komponentu
ReactDOM.render(
  <Component text="Hello world!" />,
  document.getElementById('root')
);
