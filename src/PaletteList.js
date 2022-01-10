import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@mui/styles';
import styles from './styles/PaletteListStyles.js';

import MiniPalette from './MiniPalette';



class PaletteList extends Component {  
  goToPalette(id) {
    this.props.history.push(`/react-colors-project/palette/${id}`);
  }
  render() {
    const { classes, palettes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/react-colors-project/palette/new/">create palette</Link> 
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
