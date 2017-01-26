/**
 * Created by adam.kazberuk on 1/25/2017.
 */
import React, { PropTypes, Component } from 'react'
import Ingredient from '../../ingredient/ingredient';
import Instruction from '../instruction/instruction';
import './individual.css'

class Individual extends Component{
  parseCookingTime(cookingTime){
    let time = "";
    if(cookingTime.minutes >= 60){
      cookingTime.hours += cookingTime.minutes / 60;
      cookingTime.minutes = cookingTime.minutes % 60;
    }
    if(cookingTime.hours !== 0){
      time += cookingTime.hours + " hours "
    }
    time += cookingTime.minutes + " minutes";
    return time;
  }

  getTotalTime(prep, cook){
    return {
      hours: this.props.preparationTime.hours + this.props.cookingTime.hours,
      minutes: this.props.preparationTime.minutes + this.props.cookingTime.minutes
    }
  }

  render(){
    let prepTime = this.parseCookingTime(this.props.preparationTime);
    let cookingTime = this.parseCookingTime(this.props.cookingTime);
    let totalTime = this.parseCookingTime(this.getTotalTime(prepTime, cookingTime));
    return(
      <div className="individual-recipe">
        <div className="name">{this.props.name}</div>
        <div className="preparation-time">Preparation time:{prepTime}</div>
        <div className="cooking-time">Cooking time:{cookingTime}</div>
        <div className="total-time">Total time:{totalTime}</div>
        <div className="ingredients">
            <p>Ingredients:</p>
            {this.props.ingredients.map((x, i) =>
              <Ingredient name={x.name}
                          quantity={x.quantity}
                          measurement={x.measurement}
                          key={i}/>
            )}
        </div>
        <Instruction preparation={this.props.instructions.preparation} cooking={this.props.instructions.cooking}/>
      </div>
    )
  }
}

export default Individual
