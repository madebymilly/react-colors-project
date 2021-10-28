import React, { Component } from 'react'
import { withStyles } from '@mui/styles';
import styles from './styles/NewPaletteFormStyles';

class NewPaletteForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.NewPaletteForm}>
        NewPaletteForm...
      </div>
    )
  }
}

export default withStyles(styles)(NewPaletteForm);
