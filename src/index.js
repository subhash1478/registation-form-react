import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Register from './Register';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React Form'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
       < Register/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
