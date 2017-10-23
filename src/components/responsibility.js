import React from 'react';

// komponent prezentacyjny
const Anchor = (props) => {
  // tutaj nie trzeba bindować chyba, że chcesz przekazać parametr...
  // obsługa zdarzenia jest delegowana do kontenera!
  return <a href="#" onClick={props.onAnchorClick}>Hello world</a>;
};

// kontener
class Container extends React.Component {
  // metoda obsługi zdarzeń mogą być tylko w kontenerze
  onAnchorClick(event) {
    event.preventDefault();
    console.log('hello from child!');
  }

  render() {
    // tutaj bindujemy
    return <Anchor onAnchorClick={this.onAnchorClick.bind(this)} />;
  }
}

// użycie komponentu
ReactDOM.render(<Component />, document.getElementById('root'));
