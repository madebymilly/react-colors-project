import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@mui/styles';

const styles = {
  main: {
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

function MiniPalette(props) {
  const { classes, colors, paletteName: name, emoji, link } = props;
  console.log(props);
  const colorDivs = colors.map(color => (
    <div key={color.name} className={classes.box} style={ { backgroundColor: color.color }}></div>
  ));
  return (
    <div className={classes.main}>
      {/* <Link 
        exact 
        to={link}
      > */}
        <div className={classes.colors}>{colorDivs}</div>
        <h5 className={classes.title}>{name}<span className={classes.emoji}>{emoji}</span></h5>
      {/* </Link> */}
    </div>
  )
}

export default withStyles(styles)(MiniPalette);
