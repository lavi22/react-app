import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CurrentName from './componants/CurrentName';
import Input from './componants/Input';
import Feed from './componants/Feed';
import Products from './componants/Products/Products';


class App extends Component {

  constructor(){ 
    super();
    this.state = {
      name: "All",
      show: true,
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({ show: !prevState.show }))
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My First React App</h1>
        </header>
        
        <br/>

        <button onClick={this.handleClick}>Click me</button>

        {this.state.show ? <CurrentName name={this.state.name}/> : <h1>Hello world</h1> }
        <Input />
        <Feed />
        <Products/>


      </div>


    );
  }
}

export default App;