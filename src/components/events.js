import React from 'react';

// klasa komponentu
class Component extends React.Component {
  constructor(props) {
    super(props);

    // stan początkowy definiuj w konstruktorze!
    this.state = { text: '' };
  }

  onAnchorClick(event) {
    // return false; nie działa!
    event.preventDefault();

    // bez bindowania this byłby 'undefined'!
    console.log(this.state.text);
  }

  // obowiązkowa implementacja!
  render() {
    return <a href="#" onClick={this.onAnchorClick.bind(this)}>Usuń</a>;

    // return <a href="#" onClick={(event) => {
    //   event.preventDefault();
    //   consolo.log(this.state.text); // nie trzeba bindować bo arrow f. nie zmienia kontekstu!
    // }}>{this.state.text}</a>;
  }
}

// użycie komponentu
ReactDOM.render(<Component />, document.getElementById('root'));
