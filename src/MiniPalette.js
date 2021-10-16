import React from 'react';
import { withStyles, withThemeCreator } from '@mui/styles';

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal',
    
  },
  secondary: {
    background: 'pink',
    '& h1': {
      color: 'white',
    }
  },
}

function MiniPalette(props) {
  const { classes } = props;
  console.log(classes);
  return (
    <div className={classes.main}>
      <h1>MiniPalette</h1>
      <section className={classes.secondary}><h1>kjlsdfkjdslf</h1></section>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);
