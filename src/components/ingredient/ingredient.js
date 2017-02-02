/**
 * Created by adam.kazberuk on 1/25/2017.
 */
import React, { PropTypes, Component } from 'react'

import './ingredient.css'

class Ingredient extends Component{
  componentDidMount(){
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

  render(){

    return(
      <div className={"ingredient"}>{this.props.name}: {this.props.quantity}</div>
    )
  }
}

export default Ingredient
