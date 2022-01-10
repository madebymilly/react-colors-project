import React from 'react';
// import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { withStyles } from '@mui/styles';
import styles from './styles/MiniPaletteStyles';


// in stead of using <Link> we change the history with the goToPalette function.
// this way we don't have to use div's in an anchor link.
function MiniPalette(props) {
  const { classes, colors, emoji, paletteName: name, goToPalette } = props;
  const colorDivs = colors.map(color => (
    <div key={uuid()} className={classes.box} style={ { backgroundColor: color.color }}></div>
  ));
  return (
    <div className={classes.root} onClick={goToPalette}>
      {/* <Link 
        exact 
        to={`/react-colors-project/${id}`}
      > */}
        <div className={classes.colors}>{colorDivs}</div>
        <h5 className={classes.title}>{name}<span className={classes.emoji}>{emoji}</span></h5>
      {/* </Link> */}
    </div>
  )
}

export default withStyles(styles)(MiniPalette);
