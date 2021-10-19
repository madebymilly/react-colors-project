import React from 'react';
// import { Link } from 'react-router-dom';
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    marginBottom: '1rem',
    height: '200px',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  colors: {
    backgroundColor: 'white',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden' 
  },
  box: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
  },
}

// in stead of using <Link> we change the history with the goToPalette function.
// this way we don't have to use div's in an anchor link.

function MiniPalette(props) {
  const { classes, colors, emoji, paletteName: name, goToPalette } = props;
  const colorDivs = colors.map(color => (
    <div key={color.id} className={classes.box} style={ { backgroundColor: color.color }}></div>
  ));
  return (
    <div className={classes.root} onClick={goToPalette}>
      {/* <Link 
        exact 
        to={`/palette/${id}`}
      > */}
        <div className={classes.colors}>{colorDivs}</div>
        <h5 className={classes.title}>{name}<span className={classes.emoji}>{emoji}</span></h5>
      {/* </Link> */}
    </div>
  )
}

export default withStyles(styles)(MiniPalette);
