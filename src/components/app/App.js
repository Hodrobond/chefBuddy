import React, { Component } from 'react';
import {connect} from 'react-redux'

import logo from './logo.svg';
import './App.css';
import RecipeList from '../recipe/recipeList/recipeList';
import Loader from '../loader/loader';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component {


  componentDidMount(){

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Link to='/recipeList'>RecipeList</Link>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RecipeList/>
        <Loader/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    App: state.App
  }
}

export default connect(mapStateToProps)(App)
