import React from 'react';
import PropTypes from 'prop-types';

// klasa komponentu
class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loaded: false };
  }

  componentDidMount() {
    // stan zmieniaj zawsze za pomocą setState!!
    this.setState({ loaded: true });
  }

  render() {
    // obsługujemy obie możliwości jakie może mieć wartość loaded stanu
    const paragraphClass = this.state.loaded ? 'isActive' : null;

    // kod zależny od wartości stanu komponentu
    return <p className={paragraphClass}>Hello world!</p>;
  }
}

// użycie komponentu
ReactDOM.render(<Component />, document.getElementById('root'));
