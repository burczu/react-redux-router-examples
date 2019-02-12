import React from 'react';

// import pliku CSS
import '../styles/styles.css';

// klasa komponentu
class Component extends React.Component {
  // obowiązkowa implementacja!
  render() {
    // styl jako obiekt
    const styles = {
      color: '#000',
      borderColor: '#fff' // odpowiednik właściwości "border-color" w CSS
    };

    return (
      <div className="container"> // użycie klasy "container" zdefiniowanej w styles.css
        <p style={styles}> // użycie obiektu ze stylami
          Some text...
        </p>
      </div>
    );
  }
}

// użycie komponentu
ReactDOM.render(
  <Component />,
  document.getElementById('root')
);
