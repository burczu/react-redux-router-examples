import React from 'react';
import PropTypes from 'prop-types';

// ten komponent wie tylko co ma wyświetlić...
const Renderer = (props) => {
  return props.render('I only know what to render...');
};

Renderer.propTypes = {
  render: PropTypes.func.isRequired,
};


// ten komponent wie tylko jak cos wyswietlic...
const App = () => {
  return (
    <Renderer render={textToRender => <p style{{ color: 'blue' }}>{textToRender}</p>} />
  );
};

// użycie komponentu
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
