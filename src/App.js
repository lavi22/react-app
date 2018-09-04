import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CurrentName from './componants/CurrentName';


class App extends Component {
//constructor with a default state
  constructor(){ 
    super();
    this.state = {
      name: "Steven",
      show: true
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((prevState) => ({ show: !prevState.show }))
  }

  render() {

    return ( //passing the this.state.name to the new component: CurrentName to display the name on screen
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My First React App</h1>
        </header>
        
        <br/>

        <button onClick={this.handleClick}>Click me</button>

        {this.state.show ? <CurrentName name={this.state.name}/> : null}
      </div>
    );
  }
}

export default App;