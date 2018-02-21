import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import NameTag from '../../components/NameTag';
import AppTitleComponent from '../../components/BookListAppTitle';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <AppTitleComponent/>
        
      </div>
    );
  }
}

export default App;
