import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@mui/styles';

import './styles/Palette.css'

const styles = {
  Palette: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column'
	},
	colorBoxes: {
		height: '90%',
	}
}

class Palette extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 level: 500,
			 format: 'hex'
		}
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}
	changeLevel(level) {
		//console.log(level);
		this.setState({ level });
	}
	changeFormat(val) {
		//console.log(val);
		this.setState({ format: val });
	}
	render() {
		const { classes } = this.props;
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map(color => (
			<ColorBox 
				key={color.id} 
				id={color.id} 
				background={color[format]} 
				name={color.name} 
				paletteID={id} 
				showingFullPalette={true}
			/>
		));

		return (
			<div className={classes.Palette}>
				<NavBar 
					level={level} 
					changeLevel={this.changeLevel} 
					handleChange={this.changeFormat}
					isSingleColor={false}
				/>
				<div className={classes.colorBoxes}>
					{colorBoxes}
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}
export default withStyles(styles)(Palette);
