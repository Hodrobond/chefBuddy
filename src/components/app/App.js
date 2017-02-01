import React, { Component } from 'react';
import {connect} from 'react-redux'

import logo from './logo.svg';
import './App.css';
import RecipeList from '../recipe/recipeList/recipeList';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component {


  componentDidMount(){
    fetch("/api/recipes")
      .then(function(response){
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

          // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
        });
      })
    fetch("/api/ingredients")
      .then(function(response){
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

          // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
        });
      })
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
