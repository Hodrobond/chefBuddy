/**
 * Created by adam.kazberuk on 1/25/2017.
 */
import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import Individual from '../individual/individual';
import './recipeList.css'

class recipeList extends Component{
  componentDidMount(){
    var self = this;
    fetch("/api/recipes")
      .then(function(response){
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

          // Examine the text in the response
        response.json().then(function(data) {
          self.props.recipes = data;
        });
      })
  }

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
