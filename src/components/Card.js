import React, { Component } from 'react';
import Button from '../components/Button';

class Card extends Component {
  render() {
    const { agency, mainImage, price } = this.props.data;
    const { type } = this.props;

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
          <Button type={type} />
        </div>
      </div>
    );
  }
}

export default Card;