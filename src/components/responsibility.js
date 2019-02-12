import React from 'react';

// komponent prezentacyjny
const Anchor = (props) => {
  // tutaj nie trzeba bindować chyba, że chcesz przekazać parametr...
  // obsługa zdarzenia jest delegowana do kontenera!
  return <a href="#" onClick={props.onAnchorClick}>Hello world</a>;
};

// kontener
class Container extends React.Component {
  constructor(props) {
    super(props);

    // oczywiście trzeba zbindować, bo `this` będzie wskazywać na komponent Anchor
    this.handleClick = this.handleClick.bind(this);
  }

  // metoda obsługi zdarzeń mogą być tylko w kontenerze
  handleClick(event) {
    event.preventDefault();
    console.log('hello from child!');
  }

  render() {
    return <Anchor onAnchorClick={this.onAnchorClick} />;
  }
}

// użycie komponentu
ReactDOM.render(
  <Component />,
  document.getElementById('root')
);
