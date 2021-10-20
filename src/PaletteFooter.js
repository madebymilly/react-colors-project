import React from 'react'
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    backgroundColor: 'white',
    height: '5vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: '1.5rem',
    margin: '0 1rem',
  }
}

function PaletteFooter(props) {
  const { classes, paletteName, emoji } = props;
  return (
    <footer className={classes.root}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  )
}

export default withStyles(styles)(PaletteFooter);
