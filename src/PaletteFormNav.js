import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

const drawerWidth = 320;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function PaletteFormNav(props) {
  const { open, handleDrawerOpen, palettes, addPalette } = props;

  const [newPaletteName, setNewPaletteName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });
  
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={() => addPalette(newPaletteName)}>
            <Link to="/react-colors-project/"><Button variant="contained" color="secondary">Go Back</Button></Link>
            <TextValidator 
              value={newPaletteName}
              name="newPaletteName"
              label="Palette Name"
              onChange={(e) => setNewPaletteName(e.target.value)} 
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Palette name is required.', 'Palette name already taken.']}
            />
            <Button 
              variant="contained" 
              color="primary" 
              type="submit"
            >Save Palette</Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default PaletteFormNav;
