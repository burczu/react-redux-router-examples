import React from 'react';

// klasa komponentu
class Component extends React.Component {
  // PIERWSZE RENDEROWANIE

  constructor(props) {
    super(props);
    // odpalany oczywiście jako "najpierwszy"
  }

  static getDerivedStateFromProps(props, state) {
    // zaraz przed każdym renderowaniem (raczej nie będzie często stosowany)
    // pozwala zareagować na zmiany w "propsach"
    // czyli de-facto na zmiany gdzieś wyżej w drzewie VirtualDOM
  }

  render() {
    // renderowanie (to też metoda cyklu życia komponentu)
  }

  componentDidMount() {
    // po pierwszym renderowaniu
    // poza 'render' najczęściej wykorzystywana metoda cyklu zycia
  }

  // KOLEJNE RENDEROWANIE

  // static getDerivedStateFromProps(props, state) {
    // wywoływane przed każdym renderem
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // umożliwia porównanie obecnego stanu i "propsów" z ich nowymi wersjami
    // i ewentualnie zatrzymać update - wystarczy zwrócić 'false'
  }

  // render () {
    // kolejne renderowanie
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // rzadko używane, pozwala wyciągnąć informacje z DOM,
    // zaraz przed jego aktualizacją
    // wartość zwracana to tzw. "snapshot
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // wywoływane już po aktualizacji DOM
    // tutaj należy unikać wywoływania `this.setState()`!
    // w zmiennej "snapshot" dostępna jest wartość
    // zwrócona przez `getSnapshotBeforeUpdate`
  }

  componentWillUnmount() {
    // przed zniszczeniem komponentu
  }
}

// użycie komponentu
ReactDOM.render(
  <Component />,
  document.getElementById('root')
);
