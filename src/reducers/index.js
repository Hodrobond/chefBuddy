/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import {combineReducers} from 'redux'
import App from './app/app'
import Recipe from './recipe/recipe'
import Ingredient from './ingredient/ingredient'
import Loader from './loader/loader'

export default combineReducers({
    App,
    Recipe,
    Ingredient,
    Loader
})
