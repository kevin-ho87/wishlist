import React from 'react';
import '../css/Button.css';

const Button = ({type, disableButton, onClick}) => {
  let buttonClass = '';
  let buttonText = '';

  if (type === 'add') {
    buttonClass = 'btn_add';
    buttonText = 'Add property';
  } else if (type === 'remove') {
    buttonClass = 'btn_remove';
    buttonText = 'Remove property';
  }

  return (
    <button
      className={`btn ${buttonClass}`}
      type="button"
      disabled={disableButton}
      onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default Button;