import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeList from '../recipe/recipeList/recipeList';

class App extends Component {
  render() {
    let recipes = [
      {
        'name': 'Chicken Parmesan',
        'preparationTime':{
          'minutes': 10,
          'hours': 0
        },
        'cookingTime': {
          'minutes': 15,
          'hours': 0
        },
        'ingredients': [{
            'name': 'chicken',
            'quantity': '1',
            'measurement': 'lb'
          },
          {
            'name': 'parmesan',
            'quantity': '1',
            'measurement': 'cup'
          }],
        'instructions': {
          'preparation':[
            'tenderize chicken',
            'get parmesan cheese'
          ],
          'cooking':[
            'put chicken in pan for 10 minutes',
            'add parmesan and cook for 5 more minutes'
          ]
        }
      },
      {
        'name': 'Carrot Soup',
        'preparationTime':{
          'minutes': 10,
          'hours': 0
        },
        'cookingTime': {
          'minutes': 15,
          'hours': 0
        },
        'ingredients': [{
            'name': 'carrot',
            'quantity': '1',
            'measurement': 'lb'
          },
          {
            'name': 'water',
            'quantity': '1',
            'measurement': 'cup'
          }],
          'instructions': {
            'preparation':[
              'tenderize carrot',
              'get water from well'
            ],
            'cooking':[
              'put carrot in water and simmer for 14 minutes',
              'add one more carrot, simmer for 1 minute'
            ]
          }
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
