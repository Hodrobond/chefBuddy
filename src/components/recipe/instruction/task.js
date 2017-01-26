/**
 * Created by adam.kazberuk on 1/25/2017.
 */
import React, { PropTypes, Component } from 'react'

import './task.css'

class Task extends Component{
  render(){
    return(
      <div className={"task"}>{this.props.task}</div>
    )
  }
}

export default Task
