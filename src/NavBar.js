import React, { Component } from 'react'
import Slider from 'rc-slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import 'rc-slider/assets/index.css';
import './NavBar.css';


class NavBar extends Component {  
  constructor(props) {
    super(props)
  
    this.state = {
       format: 'hex',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const newFormat = e.target.value;
    this.setState({
      format: newFormat
    });
    this.props.handleChange(newFormat);
  }
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className="NavBar">
        <div className="NavBar__logo">
          <a href="#">react colorpicker</a>
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
        <div className="NavBar__select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 0.1)</MenuItem>
          </Select>
        </div>
      </header>
    )
  }
}

export default NavBar;
