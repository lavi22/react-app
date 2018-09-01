import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {name: "Steven"}
  }

  render() {
    let showHeader = true;

    function handleClick() {
      if(showHeader === true) {
        showHeader = false;
        document.getElementById("currentName").style.visibility = "hidden";
      }
      else {
        showHeader = true;
        document.getElementById("currentName").style.visibility = "visible";
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My First React App</h1>
        </header>
        
        <br/>

        <button onClick={handleClick}>Click me</button>

        <CurrentName Name={this.state.name}/>
      </div>
    );
  }
}

class CurrentName extends React.Component {
  render() {
     return (
        <h1 id='currentName'>Hello, {this.props.Name}</h1>
     );
  }
}


export default App;
