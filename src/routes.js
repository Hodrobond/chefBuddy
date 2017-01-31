// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/app/App';
import RecipeList from './components/recipe/recipeList/recipeList';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/recipeList" component={RecipeList} />
  </Router>
);

export default Routes;
