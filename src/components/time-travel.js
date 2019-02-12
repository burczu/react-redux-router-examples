import React from 'react';

// klasa komponentu
class Component extends React.Component {
  state = { loaded: false };

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
ReactDOM.render(
  <Component />,
  document.getElementById('root')
);
