import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StateSample from './component/day8/StateSample';

const Day21 = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='Day21'>
      <h1>Day 21 Introducing React Hook(useState)</h1>
      <h2>{count} </h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  )
}

const Day22SingleInput = () => {
  const [firstName, setFirstName] = useState("Tom");
  const handleChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
  }

  return (
    <div className='Day22SingleInput'>
      <h1>First Name: {firstName}</h1>
      <label htmlFor='firstName'>First Name: </label>
      <input type='text' id='firstName' name='firstName' placeholder='First Name' value={firstName} onChange={handleChange} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateSample />
    <Day21 />
    <Day22SingleInput />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();