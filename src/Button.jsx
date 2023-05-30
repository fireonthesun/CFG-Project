import React from 'react';
import './Button.css';

const Button = ({ message = "" }) => {
  return (
    <button className="Button" type="button">
        <h2 className="Button__text">{message}</h2>
        </button>
  );
}

export default Button;