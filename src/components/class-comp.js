import React from 'react';
import PropTypes from 'prop-types';

// klasa komponentu - dziedziczy z React.Component
class Component extends React.Component {
  // kontrola typu przekazanej wartości
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  // obowiązkowa implementacja!
  render() {
    return <p>{this.props.text}</p>; // do "props" dostajemy się przez "this"
  }
}

// użycie komponentu
ReactDOM.render(
  <Component text="Hello world!" />,
  document.getElementById('root')
);
