import React from 'react';

// klasa komponentu
class Component extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    // wyświetli "parameter!"
    console.log(event.target.dataset.text);
  }

  // obowiązkowa implementacja!
  render() {
    return <a href="#" data-text="parameter!" onClick={this.handleClick}>Hello world</a>;
  }
}

// użycie komponentu
ReactDOM.render(
  <Component />,
  document.getElementById('root')
);
