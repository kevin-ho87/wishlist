import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { type } = this.props;

    let button = null;
    if (type === 'add') {
      button = <button className="btn btn_add" type="button">Add property</button>;
    } else if (type === 'remove') {
      button = <button className="btn btn_remove" type="button">Remove property</button>;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default Button;