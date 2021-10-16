import React, { Component } from 'react'
import { withStyles } from '@mui/styles';
import MiniPalette from './MiniPalette';

const styles = {
  main: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width: '60%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white'
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
  }
}

class PaletteList extends Component {  
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { classes, palettes } = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <a href="/">create palette</a> 
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette =>
              <MiniPalette key={palette.id} {...palette} goToPalette={() => this.goToPalette(palette.id)} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);
