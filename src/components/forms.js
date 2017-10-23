import React from 'react';

// klasa komponentu
class Component extends React.Component {
  constructor(props) {
    super(props);

    // stan początkowy definiuj w konstruktorze!
    this.state = { text: '' };
  }

  onInputChange(event) {
    // return false; nie działa!
    event.preventDefault();

    const newValue = event.currentTarget.value;

    // to nie bezpośrednie wpisanie tekstu zmienia stan tylko poniższy kod
    this.setState({ text: newValue });
  }

  onClearClicked(event) {
    event.preventDefault();

    // to spowoduje wyczyszczenie stanu i jednocześnie inputa (bo podpięty do value)
    this.setState({ text: '' });
  }

  // obowiązkowa implementacja!
  render() {
    return (
      <div>
        <input type="text" onChange={this.onInputChange.bind(this)} value={this.state.text} />
        <button onClick={this.onClearClicked.bind(this)}>Clear</button>
      </div>
    );

  }
}

// użycie komponentu
ReactDOM.render(<Component />, document.getElementById('root'));
