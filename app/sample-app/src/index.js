import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Icon from './component/day4/Icon'
import Form from './component/day4/Form'
import Color from './component/day4/Color'
import reportWebVitals from './reportWebVitals';
import PropsSample from './component/day5/PropsSample';
import Numbers from './component/day6/Numbers';
import HexadecimalColors from './component/day6/HexadecimalColors';

const root = ReactDOM.createRoot(document.getElementById('root'));
const person = {
  name: "Tom",
  age: 20,
  sex: "male"
};

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}


root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Icon />
    <Form /> */}
    <Color />
    {/* <Color />
    <Color />
    <Color />
    <Color />
    <Welcome name="Sara" />
    <PropsSample person={person} /> */}
    <Numbers />
    <HexadecimalColors />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();