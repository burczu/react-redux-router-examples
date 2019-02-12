import React from 'react';
import PropTypes from 'prop-types';

// ten komponent wie tylko co ma wyświetlić...
const Renderer = (props) => {
  return props.children('I only know what to render...');
};

Renderer.propTypes = {
  children: PropTypes.func.isRequired,
};


// ten komponent wie tylko jak cos wyswietlic...
const App = () => {
  return (
    <Renderer>
      {textToRender => <p style{{ color: 'blue' }}>{textToRender}</p>}
    </Renderer>
  );
};

// użycie komponentu
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
