/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import {combineReducers} from 'redux'
import App from './app/app'
import Recipe from './recipe/recipe'
import Ingredient from './ingredient/ingredient'

export default combineReducers({
    App,
    Recipe,
    Ingredient
})
