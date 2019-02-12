import React from 'react';

// klasa komponentu
class Component extends React.Component {
  state = { text: '' };

  constructor(props) {
    super(props);

    // jeśli w metodzie korzystasz z `this` musisz ją "zbindować"!!
    // to dlatego, że jest ona wywoływana w kontekście elementu/komponentu,
    // który ją wywołuje!
    this.handleAnchorClick = this.handleAnchorClick.bind(this);
  }

  handleAnchorClick(event) {
    // return false; nie działa!
    event.preventDefault();

    // bez bindowania this byłby 'undefined'!
    console.log(this.state.text);
  }

  // można też tak - nie trzeba bindować w konstruktorze
  // minus - sposób w jaki taka metoda jest transpilowana
  // w kodzie wynikowym trafia ona do konstruktora, a nie do prototype!!
  // handleAnchorClick = (event) => {
  //   // return false; nie działa!
  //   event.preventDefault();
  //
  //   // bez bindowania this byłby 'undefined'!
  //   console.log(this.state.text);
  // };

  // obowiązkowa implementacja!
  render() {
    return <a href="#" onClick={this.handleAnchorClick}>Usuń</a>;

    // można też tak, ale wtedy bindowanie odbywa się przy każdym renderze...
    // return <a href="#" onClick={this.handleAnchorClick.bind(this)}>Usuń</a>;

    // można z arrow function inline - taka funkcja nie zmienia kontekstu
    // uwaga! taki callback jest tworzony od nowa przy każdym renderze
    // return <a href="#" onClick={(event) => {
    //   event.preventDefault();
    //   console.log(this.state.text);
    // }}>{this.state.text}</a>;
  }
}

// użycie komponentu
ReactDOM.render(
  <Component />,
  document.getElementById('root')
);
