import React from 'react'; // musi być ten import jeśli JSX ma działać!


// przypisywanie do zmiennych
const paragraph = <p>Hello world!</p>;


// zagnieżdżanie
const box = ( // JSX na więcej linii? "owiń" w nawiasy!
  <div>
    <p>Hello world!</p>
  </div>
);


// wstrzykiwanie wyrażeń
const text = 'Hello world!';
const injectedText = <p>{text}</p>; // nawiasy klamrowe

const number = 10;
const calc = <p>{number * 3}</p>;

const element = <p>Hello!</p>;
const injectedElement = <div>{element}</div>;


// atrybuty - odpowiadają atrybutom HTML tylko, że camelCase
const textWithAttribute = <button type="submit">Some text...</button>;
const textWithClass1 = <p className="hello">Hello world!</p>; // "className" oraz "htmlFor" - przypadek szczególny

const helloClass = 'hello';
const textWithClass2 = <p className={helloClass}>Hello world!</p>; // przypisanie zmiennej

const textWithClass3 = <p className={number === 10 ? 'hello' : 'good-by'}>Hello world!</p>; // przypisanie wyrażenia

const styleObject = { color: 'red', fontWeight: 'bold' };
const inlineStyle = <p style={styleObject}>Hello world!</p>; // przyisanie obiektu


// wyświetlanie warunkowe
let conditional;
if (number === 10) {
  conditional = <p>Hello world</p>;
} else {
  conditional = null;
}

const box2 = <div>{conditional}</div>;
const box3 = <div>{number === 10 ? <p>Hello world</p> : null}</div>; // ten sam efekt


// wyświetlanie elementów tablicy
const items = [1, 2, 3, 4];
const list = (
  <ul>
    {items.map((item, index) => { // "map" - budowanie tablicy elementów "li"
      return <li key={index}>{item}</li> // "key" jest wymagane!
    })}
  </ul>
);
