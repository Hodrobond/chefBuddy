import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeList from '../recipe/recipeList/recipeList';

class App extends Component {
  render() {
    let recipes = [
      {
        'name': 'Chicken Parmesan',
        'ingredients': [{
            'name': 'chicken',
            'quantity': '1',
            'measurement': 'lb'
          },
          {
            'name': 'parmesan',
            'quantity': '1',
            'measurement': 'cup'
          }]
      },
      {
        'name': 'Carrot Soup',
        'ingredients': [{
            'name': 'carrot',
            'quantity': '1',
            'measurement': 'lb'
          },
          {
            'name': 'water',
            'quantity': '1',
            'measurement': 'cup'
          }]
      }

    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RecipeList recipes={recipes}/>
      </div>
    );
  }
}

export default App;
