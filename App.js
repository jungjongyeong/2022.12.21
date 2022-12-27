import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>{this.props.sub}</h1>
        {this.props.desc}
        
      </header>
    );
  }
}

class App extends Component {
  render(){
    return (
     <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" desc="For UIASDASDAS"></Subject>

     </div> 
    )
  }
}
export default App;
