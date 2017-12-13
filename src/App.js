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

    this.handleAddProperty = this.handleAddProperty.bind(this);
    this.handleRemoveProperty = this.handleRemoveProperty.bind(this);
  }

  handleAddProperty(data) {
    const { saved } = this.state;

    // Check if property exists in saved state
    if (!saved.includes(data)) {
      // Add property to saved state
      this.setState({
        saved: [...saved, data]
      });
    }
  }

  handleRemoveProperty(data) {
    const filtered = this.state.saved.filter((item) => {
      return item !== data;
    });

    this.setState({
      saved: filtered
    });
  }

  render() {
    const resultsCards = this.state.results.map((item) => {
      let existsInSaved = this.state.saved.includes(item);
      return (
        <Card key={item.id}
          data={item}
          type={'add'}
          isButtonDisabled={existsInSaved}
          onHandleClick={this.handleAddProperty} />
      );
    });

    const savedCards = this.state.saved.map((item) => {
      return (
        <Card key={item.id}
          data={item}
          type={'remove'}
          isButtonDisabled={false}
          onHandleClick={this.handleRemoveProperty} />
      );
    });

    return (
      <div className="holder">
        <div className="container">
          <div className="col">
            <h1>Wishlist</h1>
            <p>Welcome to my wishlist app. Click "add property" button in the cards under "results" column to save your desired property. Click "remove property" button in the cards under "saved properties" column to remove saved cards.</p>
          </div>
        </div>
        <div className="container">
          <div className="col col-cards">
            <h3>Results</h3>
            <div className="cards-holder">
              { resultsCards }
            </div>
          </div>
          <div className="col col-cards">
            <h3>Saved Properties</h3>
            <div className="cards-holder">
              { savedCards }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
