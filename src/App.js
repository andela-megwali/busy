import React, { Component } from 'react';
import './App.css';
import Category from './Category'

class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <header className={'App-header'}>
          <h1 className={'App-title'}>{'Time to get busy'}</h1>
        </header>
        <p className={'App-intro'}>
          {'Todo today'}
        </p>
        <Category />
      </div>
    );
  }
}

export default App;
