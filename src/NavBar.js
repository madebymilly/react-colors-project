import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Slider from 'rc-slider';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import { withStyles } from '@mui/styles';
import styles from './styles/NavBarStyles';
import 'rc-slider/assets/index.css';


class NavBar extends Component {  
  constructor(props) {
    super(props)
  
    this.state = {
       format: 'hex',
       open: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleChange(e) {
    const newFormat = e.target.value;
    this.setState({
      format: newFormat,
      open: true
    });
    this.props.handleChange(newFormat);
  }
  closeSnackbar() {
    this.setState({
      open: false
    });
  }
  render() {
    const { classes, level, changeLevel, isSingleColor } = this.props;
    const { format } = this.state;
    return (
      <header className={classes.NavBar}>
        <div className={classes.logo}>
          <Link to="/react-colors-project/">react colorpicker</Link>
        </div>
        {!isSingleColor &&
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider 
                defaultValue={level} 
                min={100} 
                max={900} 
                step={100}
                onAfterChange={changeLevel} 
              />
            </div>
          </div>
        }
        
        <div className={classes.selectContainer}>
          <FormControl variant="standard">
            <Select value={format} onChange={this.handleChange}>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 0.1)</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Snackbar 
          anchorOrigin={{vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>}
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton 
              onClick={this.closeSnackbar} 
              color="inherit" 
              key="close" 
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    )
  }
}

export default withStyles(styles)(NavBar);
