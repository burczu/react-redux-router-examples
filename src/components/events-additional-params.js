import React from 'react';

// klasa komponentu
class Component extends React.Component {
  onAnchorClick(param, event) { // obiekt "event" doklejany jest na końcu!
    event.preventDefault();

    // wyświetli "parameter!"
    console.log(param);
  }

  // obowiązkowa implementacja!
  render() {
    return <a href="#" onClick={this.onAnchorClick.bind(this, 'parameter!')}>Hello world</a>;
  }
}

// użycie komponentu
ReactDOM.render(<Component />, document.getElementById('root'));
