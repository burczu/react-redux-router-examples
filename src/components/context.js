import React from 'react';

// definicja kontekstu
// "Initial text..." to wartość domyślna dla Consumera
// zostanie użyta tylko jeśli nie znaleziono żadnego Provider wśród rodziców
const { Provider, Consumer } = React.createContext('Initial text...');

// wykorzystanie Providera do dostarczenia kontestu
class App extends React.Component {
  // zmiana wartości "text" stanu zostanie przekazana do wszystkich
  // Consumerów znajdujących się wewnątrz Providera
  state = { text: 'Hello world!' };

  render() {
    return (
      <Provider value={this.state.text}>
        <Text />
      </Provider>
    );
  }
}

// wykorzystanie Consumera do wyświetlenia globalnej wartości
const Text = () => ( // propsy nie potrzebne - skorzystamy z wartosci dostarczanej przez Context API
  <Consumer>
    {text => <p>{text}</p>}
  </Consumer>
);
