/**
 * Created by adam.kazberuk on 1/25/2017.
 */
import React, { PropTypes, Component } from 'react'
import Individual from '../individual/individual';
import './recipeList.css'

class recipeList extends Component{
  render(){
    return(
      <div className="recipe-list">
        <div className="recipes">
            {this.props.recipes.map((x, i) =>
              <Individual name={x.name}
                          ingredients={x.ingredients}
                          key={i}/>
            )}
        </div>
      </div>
    )
  }
}

export default recipeList
