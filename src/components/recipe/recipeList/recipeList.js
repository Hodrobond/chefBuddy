/**
 * Created by adam.kazberuk on 1/25/2017.
 */
import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import Individual from '../individual/individual';
import './recipeList.css'

class recipeList extends Component{
  render(){
    return(
      <div className="recipe-list">
        <div className="recipes">
            {this.props.Recipe.map((x, i) =>
              <Individual name={x.name}
                          ingredients={x.ingredients}
                          instructions={x.instructions}
                          preparationTime={x.preparationTime}
                          cookingTime={x.cookingTime}
                          key={i}/>
            )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Recipe: state.Recipe
  }
}


export default connect(mapStateToProps)(recipeList)
