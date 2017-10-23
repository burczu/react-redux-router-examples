import React from 'react';
import PropTypes from 'prop-types';

// klasa komponentu
class Component extends React.Component {
  componentWillMount() {
    // przed pierwszym renderowaniem
  }

  render() {
    // renderowanie (to też metoda cyklu życia komponentu)
  }

  componentDidMount() {
    // po pierwszym renderowaniu
  }

  // teraz zmiana stanu

  componentWillUpdate() {
    // przed kolejnym renderowaniem
  }

  // render () {
  // kolejne renderowanie
  // }

  componentDidUpdate() {
    // po kolejnym renderowaniu
  }

  componentWillUnmount() {
    // przed zniszczeniem komponentu
  }
}

// użycie komponentu
ReactDOM.render(<Component />, document.getElementById('root'));
