import React, { Component } from 'react';
import Card from './components/Card'
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
        <Card key={item.id} data={item} type={'add'} />
      );
    });

    const savedCards = this.state.saved.map((item) => {
      return (
        <Card key={item.id} data={item} type={'remove'} />
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
