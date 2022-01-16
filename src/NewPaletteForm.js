import React, { useState } from 'react'
import { arrayMove } from "react-sortable-hoc";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';

import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

import { styled } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import styles from './styles/NewPaletteFormStyles';

const drawerWidth = 360;

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function PersistentDrawerLeft(props) {

  const { classes, palettes, savePalette } = props;

  const maxColors = 20;
  
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(palettes[0].colors);
  
  const paletteIsFull = colors.length >= maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addColor = (currentColor, newColorName) => {
    const newColor = {color: currentColor, name: newColorName};
    setColors([...colors, newColor]);
  }
  
  const deleteBox = (colorName) => {
    const newColors = colors.filter(color => color.name !== colorName);
    setColors(newColors);
  }

  const addPalette = (newPaletteName) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      emoji: '🇳🇱', 
      colors: colors
    };
    savePalette(newPalette);
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
    const allColors = palettes.map( palette => palette.colors ).flat();
    const rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    setColors([...colors, randomColor]);
  }

  return (
    <Box className={classes.root} sx={{ display: 'flex', lineHeight: 0 }}>
      <PaletteFormNav 
        open={open} 
        handleDrawerOpen={handleDrawerOpen} 
        palettes={palettes}
        addPalette={addPalette}
      />
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
        className={classes.drawer}
        classes={{paper: classes.drawerPaper}}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography variant="h5" className={classes.drawerTitle}>Design Your Palette</Typography>
        <div className={classes.buttons}>
          <Button 
            variant="contained" 
            color="secondary" 
            className={classes.button}
            onClick={clearColors}>Clear Palette</Button>
          <Button 
            variant="contained" 
            color="primary" 
            disabled={paletteIsFull}
            className={classes.button}
            onClick={addRandomColor}>Random Color</Button>
        </div>
        <ColorPickerForm 
          addColor={addColor}
          paletteIsFull={paletteIsFull}
          colors={colors}
        />
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


export default withStyles(styles)(PersistentDrawerLeft);