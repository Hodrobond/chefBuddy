/**
 * Created by adam.kazberuk on 1/25/2017.
 */
import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Individual from '../individual/individual';
import {startLoading, finishLoading} from '../../../actions/loader'

import './recipeList.css'

class recipeList extends Component{
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount(){
    var self = this;
    self.props.startLoading();
    fetch("/api/recipes")
      .then(function(response){
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

          // Examine the text in the response
        response.json().then(function(data) {
          self.setState({
            recipes: data
          })
          self.props.finishLoading();
          console.log(self);
        });
      })
  }

  render(){
    return(
      <div className="recipe-list">
        <div className="recipes">
            {this.state.recipes.map((x, i) =>
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

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ startLoading, finishLoading}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(recipeList)
