import React from 'react';
import ReactDOM from 'react-dom';

const Component = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

const App = () => {
  // to co jest wewnątrz Component będzie wyrenderowane w miejsce "props.children"!
  return (
    <Component>
      <p>Children!!</p>
    </Component>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
