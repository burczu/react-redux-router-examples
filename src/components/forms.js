import React from 'react';

// klasa komponentu
class Component extends React.Component {
  state = { text: '' };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    // return false; nie działa!
    event.preventDefault();

    const newValue = event.currentTarget.value;

    // to nie bezpośrednie wpisanie tekstu zmienia stan tylko poniższy kod
    this.setState({ text: newValue });
  }

  handleClear() {
    // to spowoduje wyczyszczenie stanu i jednocześnie inputa (bo podpięty do value)
    this.setState({ text: '' });
  }

  // obowiązkowa implementacja!
  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChange} value={this.state.text} />
        <button onClick={this.handleClear}>Clear</button>
      </form>
    );
  }
}

// użycie komponentu
ReactDOM.render(
  <Component />,
  document.getElementById('root')
);
