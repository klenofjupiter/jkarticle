import React, { Component } from 'react';
import './App.css';

import Canvas from './Canvas.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Title: B2B or not B2B: Using Locus to Compare B2B/B2C Companies</h1>
        </header>
        <div className="grid-container">
        <Canvas className="barcode-viz" />
        <article className="content">
          <p className="intro">
            
          </p>
        </article>
        </div>
      </div>
    );
  }
}

export default App;
