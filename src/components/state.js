import React from 'react';
import PropTypes from 'prop-types';

// klasa komponentu
class Component extends React.Component {
  constructor(props) {
    super(props); // dobra praktyka (umożliwia dostęp przez "this.props" w konstruktorze)

    // stan początkowy definiuj w konstruktorze!
    this.state = { text: '' };
  }

  // metoda cyklu życia komponentu
  componentDidMount() {
    // stan zmieniaj ZAWSZE za pomocą setState!! inaczej nie będzie działać
    this.setState({ text: 'Hello world!' });
  }

  // obowiązkowa implementacja!
  render() {
    return <p>{this.state.text}</p>; // odwołanie do stanu - po zmianie stanu co innego się wyświetla
  }
}

// użycie komponentu
ReactDOM.render(<Component />, document.getElementById('root'));
