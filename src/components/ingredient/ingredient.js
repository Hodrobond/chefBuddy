/**
 * Created by adam.kazberuk on 1/25/2017.
 */
import React, { PropTypes, Component } from 'react'

import './ingredient.css'

class Ingredient extends Component{
  render(){

    return(
      <div className={"ingredient"}>{this.props.name}: {this.props.quantity}</div>
    )
  }
}

export default Ingredient
