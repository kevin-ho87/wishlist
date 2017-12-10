import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const { results, saved } = this.props.data;

    this.state = {
      results,
      saved
    }
  }

  render() {
    const resultsCards = this.state.results.map((item) => {
      return (
        <div className="card" key={item.id}>
          <header className="card__header" style={{backgroundColor: item.agency.brandingColors.primary}}>
            <img src={item.agency.logo} alt=""/>
          </header>
          <div className="card__thumb">
            <img src={item.mainImage} alt=""/>
          </div>
          <footer className="card__footer">
            <p>Price: {item.price}</p>
          </footer>
          <div className="card__overlay">
            <button className="btn btn_add" type="button">Add property</button>
          </div>
        </div>
      );
    });

    const savedCards = this.state.saved.map((item) => {
      return (
        <div className="card" key={item.id}>
          <header className="card__header" style={{backgroundColor: item.agency.brandingColors.primary}}>
            <img src={item.agency.logo} alt=""/>
          </header>
          <div className="card__thumb">
            <img src={item.mainImage} alt=""/>
          </div>
          <footer className="card__footer">
            <p>Price: {item.price}</p>
          </footer>
          <div className="card__overlay">
            <button className="btn btn_remove" type="button">Remove property</button>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="col">
          <h3>Results</h3>
          <div className="cards-holder">
            { resultsCards }
          </div>
        </div>
        <div className="col">
          <h3>Saved Properties</h3>
          <div className="cards-holder">
            { savedCards }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
