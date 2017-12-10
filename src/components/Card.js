import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { agency, mainImage, price } = this.props.data;

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
          <button className="btn btn_add" type="button">Add property</button>
          {/* <button className="btn btn_remove" type="button">Remove property</button> */}
        </div>
      </div>
    );
  }
}

export default Card;