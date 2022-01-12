import React, { useState, useEffect } from 'react'
import { ChromePicker } from 'react-color'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { arrayMove } from "react-sortable-hoc";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';

import DraggableColorList from './DraggableColorList';


const drawerWidth = 320;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function PersistentDrawerLeft(props) {

  const maxColors = 20;
  

  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('#FFFFFF');
  const [colors, setColors] = useState(props.palettes[0].colors);
  const [newColorName, setNewColorName] = useState('');
  const [newPaletteName, setNewPaletteName] = useState('');

  const paletteIsFull = colors.length >= maxColors;

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
    ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
      return props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });

  const updateCurrentColor = (color) => {
    setCurrentColor(color.hex);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addColor = () => {
    const newColor = {color: currentColor, name: newColorName};
    setColors([...colors, newColor]);
    setNewColorName('');
  }
  
  const deleteBox = (colorName) => {
    const newColors = colors.filter(color => color.name !== colorName);
    setColors(newColors);
  }

  const handleSubmit = () => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      emoji: '🇳🇱', 
      colors: colors
    };
    props.savePalette(newPalette);
    props.history.push("/react-colors-project/")
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newColors = arrayMove(colors, oldIndex, newIndex)
    setColors(newColors);
  };

  const clearColors = () => {
    setColors([]);
  }

  const addRandomColor = () => {
    // Pick one color from other palettes:
    const allColors = props.palettes.map( palette => palette.colors ).flat();
    const rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    setColors([...colors, randomColor]);
  }

  return (
    <Box sx={{ display: 'flex', lineHeight: 0 }}>
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
          <ValidatorForm onSubmit={handleSubmit}>
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
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={clearColors}>Clear Palette</Button>
          <Button 
            variant="contained" 
            color="primary" 
            disabled={paletteIsFull}
            onClick={addRandomColor}>Random Color</Button>
        </div>
        <ChromePicker 
          color={currentColor}
          onChangeComplete={updateCurrentColor}
        />
        <ValidatorForm onSubmit={addColor}>
          <TextValidator 
            value={newColorName} 
            name="newColorName"
            onChange={(e) => setNewColorName(e.target.value)} 
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={['Color name is required.', 'Color name already taken.', 'Color already added.']}
          />
          <Button 
            variant="contained" 
            type="submit" 
            color="primary"
            disabled={paletteIsFull}
          >{paletteIsFull ? 'Palette Full' : 'Add Color'}</Button>
        </ValidatorForm>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <DraggableColorList 
          colors={colors} 
          deleteBox={deleteBox} 
          axis="xy" 
          onSortEnd={onSortEnd} 
        />
      </Main>
    </Box>
  );
}


export default PersistentDrawerLeft;