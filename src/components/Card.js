import React, { Component } from 'react';
import Button from '../components/Button';
import '../css/Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    // Bind click with this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onHandleClick(this.props.data);
  }

  render() {
    const { agency, mainImage, price } = this.props.data;
    const { type, isButtonDisabled } = this.props;

    return (
      <div className="card">
        <header className="card__header" style={{backgroundColor: agency.brandingColors.primary}}>
          <img src={agency.logo} alt=""/>
        </header>
        <div className="card__thumb">
          <img src={mainImage} alt=""/>
        </div>
        <footer className="card__footer">
          <p>Price: {price}</p>
        </footer>
        <div className="card__overlay">
          <Button type={type} disableButton={isButtonDisabled} onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Card;