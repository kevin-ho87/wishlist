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
      return (
        <Card key={item.id} data={item} type={'add'} onHandleClick={this.handleAddProperty} />
      );
    });

    const savedCards = this.state.saved.map((item) => {
      return (
        <Card key={item.id} data={item} type={'remove'} onHandleClick={this.handleRemoveProperty} />
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
