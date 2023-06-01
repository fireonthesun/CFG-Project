import React from 'react';
import './Button.css';

const Button = ({ message = "" }) => {
  const triggeredEvent = () => {
    console.log("This many people are interested in Paris")
  }
  return (
    <button className="Button" type="button" onClick={triggeredEvent}>
        <h2 className="Button__text">{message}</h2>
        </button>
  );
}

export default Button;