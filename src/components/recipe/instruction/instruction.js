/**
 * Created by adam.kazberuk on 1/25/2017.
 */
import React, { PropTypes, Component } from 'react'
import Task from './task'
import './instruction.css'

class Instruction extends Component{
  render(){

    return(
      <div className="instructions">
        <div className={"preparation"}>
          {this.props.preparation.map((x, i) =>
            <Task task={x} key={i}/>
          )}
        </div>
        <div className={"cooking"}>
          {this.props.cooking.map((x, i) =>
            <Task task={x} key={i}/>
          )}
        </div>
      </div>
    )
  }
}

export default Instruction
