import React, { useState, useEffect } from 'react'
import { ChromePicker } from 'react-color'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Button from '@mui/material/Button';

import { withStyles } from '@mui/styles';
import styles from './styles/ColorPickerFormStyles';

function ColorPickerForm(props) {

  const { classes, addColor, paletteIsFull, colors } = props;

  const [currentColor, setCurrentColor] = useState('#FFFFFF');
  const [newColorName, setNewColorName] = useState('ttt');

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule('isColorUnique', value => {
      return colors.every(
        ({ color }) => color !== currentColor
      );
    });
  });

  const handleChange = (color) => {
    setCurrentColor(color.hex);
  }

  const handleSubmit = () => {
    addColor(currentColor, newColorName);
    setNewColorName('');
  }

  return (
    <div>
      <ChromePicker 
        color={currentColor}
        onChangeComplete={handleChange}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator 
          value={newColorName} 
          name="newColorName"
          onChange={(e) => setNewColorName(e.target.value)} 
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={['Color name is required.', 'Color name already taken.', 'Color already added.']}
          placeholder="Color Name"
          className={classes.colorNameInput}
          variant="filled"
          margin="normal"
        />
        <Button 
          variant="contained" 
          type="submit" 
          color="primary"
          disabled={paletteIsFull}
          className={classes.addColor}
        >{paletteIsFull ? 'Palette Full' : 'Add Color'}</Button>
      </ValidatorForm>
    </div>
  )
}

export default withStyles(styles)(ColorPickerForm);
