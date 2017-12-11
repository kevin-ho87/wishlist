import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { type } = this.props;

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
      <button className={`btn ${buttonClass}`} type="button">
        {buttonText}
      </button>
    );
  }
}

export default Button;