import React, { Component } from 'react';
import {connect} from 'react-redux'

import logo from './logo.svg';
import './App.css';
import RecipeList from '../recipe/recipeList/recipeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RecipeList recipes={this.props.App}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    App: state.app
  }
}

export default connect(mapStateToProps)(App)
