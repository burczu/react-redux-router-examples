import React from 'react';

const Hello = () => {
  return <p>Hello World!!</p>;
};

// HOC z użyciem komponentu funkcyjnego
// poniższy zapis jest tożsamy z
// function withContainer(Component) { return function(props) { ... }; }
const withContainer = (Component) => {
  return (props) => (
    <div className="container">
      <Component {...props} />
    </div>
  );
};

// HOC z użyciem komponentu klasowego
const withClassContainer = (Component) => {
  return class Container extends React.Component {
    state = { text: '' };

    eventHandler = () => {};

    render() {
      // rozszerzenie "propsów" o stan komponentu Container
      // tutaj można przekazać też referencje do metod klasy Container...
      const newProps = {
        ...this.props,
        ...this.state,
        this.eventHandler,
      };

      return (
        <div className="container">
          <Component {...newProps} />
        </div>
      );
    }
  };
};

const ComponentWithContainer = withContainer(Hello);
// const ComponentWithContainer = withClassContainer(Hello);

// użycie komponentu
ReactDOM.render(
  <ComponentWithContainer />,
  document.getElementById('root')
);
