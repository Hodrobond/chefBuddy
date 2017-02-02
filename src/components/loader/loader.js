/**
 * Created by adam.kazberuk on 1/25/2017.
 */
import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'

import './loader.css'

class Loader extends Component{
  componentDidMount(){

  }

  render(){
    let bars = [];
    const props = this.props;

    let visible = '';
    if(props.Loader.loading){
      visible = ' visible'
    }

    for (let i = 0; i < 12; i++) {
      let barStyle = {};
      barStyle.WebkitAnimationDelay = barStyle.animationDelay =
        (i - 12) / 10 + 's';

      barStyle.WebkitTransform = barStyle.transform =
        'rotate(' + (i * 30) + 'deg) translate(146%)';

      bars.push(
        <div style={barStyle} className="loader-bar" key={i} />
      );
    }

    return (
      <div className={'loader-wrapper'+visible}>
        <div className='loader'>
          {bars}
        </div>
        <div className='loader-backdrop'></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Loader: state.Loader
  }
}

export default connect(mapStateToProps)(Loader)
