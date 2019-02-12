import React from 'react';

// klasa komponentu
class Component extends React.Component {
  // w przypadku, gdy użyliśmy `bind` w render, obiekt "event" doklejany jest na końcu!
  handleClick(param, event) {
    event.preventDefault();

    // wyświetli "parameter!"
    console.log(param);
  }

  // obowiązkowa implementacja!
  render() {
    return <a href="#" onClick={(event) => this.handleClick('parameter!', event)}>Hello world</a>;

    // drugi sposób - z dwojga złego lepiej użyć funkcji strałkowej niż bindowania
    // return <a href="#" onClick={this.handleClick.bind(this, 'parameter!')}>Hello world</a>;
  }
}

// użycie komponentu
ReactDOM.render(
  <Component />,
  document.getElementById('root')
);
