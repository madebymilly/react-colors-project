import React, { Component } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';


class NavBar extends Component {  
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="NavBar">
        <div className="NavBar__logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="NavBar__slider-container">
          <span>Level: {level}</span>
          <div className="NavBar__slider">
            <Slider 
              defaultValue={level} 
              min={100} 
              max={900} 
              step={100}
              onAfterChange={changeLevel} 
            />
          </div>
        </div>
      </header>
    )
  }
}

export default NavBar;
