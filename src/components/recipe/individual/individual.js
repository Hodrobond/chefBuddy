/**
 * Created by adam.kazberuk on 1/25/2017.
 */
import React, { PropTypes, Component } from 'react'
import Ingredient from '../../ingredient/ingredient';
import './individual.css'

class Individual extends Component{
  render(){

    return(
      <div className="individual-recipe">
        <div className="name">{this.props.name}</div>
        <div className="ingredients">
            {this.props.ingredients.map((x, i) =>
              <Ingredient name={x.name}
                          quantity={x.quantity}
                          measurement={x.measurement}
                          key={i}/>
            )}
        </div>
      </div>
    )
  }
}

export default Individual
