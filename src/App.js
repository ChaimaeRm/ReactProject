import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { dishes } from './shared/dishes';

class App extends Component {
 
  render(){
  return (
    <div>
      <Main />
    </div>
  );
}
}

export default App;
