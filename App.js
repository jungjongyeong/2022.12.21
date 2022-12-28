import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>
          {this.props.title}
        </h1>
        {this.props.sub} 
        {this.props.desc}
        
      </header>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Subject: {
        title : "WEB",
        sub : "World wid Web"
      }
    }
  }
  render(){
    return (
     <div className="App">
        <Subject 
          title={this.state.Subject.title} 
          sub={this.state.Subject.sub}>
        </Subject>
        <Subject title="React" desc="For UIASDASDAS"></Subject>

     </div> 
    )
  }
}
export default App;
