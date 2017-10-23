import React from 'react';

const Component = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

const Parent = () => {
  // to co jest wewnątrz Component będzie wyrenderowane w miejsce "props.children"!
  return (
    <Component>
      <p>Children!!</p>
    </Component>
  );
}
