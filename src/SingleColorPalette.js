import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import styles from './styles/PaletteStyles';

import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {
	constructor(props) {
		super(props)
		this._shades = this.gatherShades(this.props.palette, this.props.colorID); // no state, cause it doesn't change
		this.state = {
			 format: 'hex'
		}
		this.changeFormat = this.changeFormat.bind(this);
		this.gatherShades = this.gatherShades.bind(this);
	}
	gatherShades(palette, colorID) {
		let shades = [];
		let allColors = palette.colors;
		// for each key find the right color
		for (let key in allColors) {
			shades = shades.concat( allColors[key].filter(color => color.id === colorID)) 
		}
		return shades.slice(1); // take away the first one (which is level 50)
	}
	changeFormat(val) {
		this.setState({ format: val });
	}
	render() {
		const { classes } = this.props;
		const { paletteName, emoji, id } = this.props.palette;
		const { format } = this.state;
		let colorBoxes = this._shades.map((shade, i) => (
			<ColorBox 
				key={i} 
				id={shade.name} 
				background={shade[format]} 
				name={shade.name} 
				showingFullPalette={false} 
			/>
		));
		return (
			<div className={classes.Palette}>
				<NavBar 
					level={false} 
					handleChange={this.changeFormat}
					isSingleColor={true}
				/>
				<div className={classes.colorBoxes}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link to={`/react-colors-project/palette/${id}`} className={classes.goBackButton}>Go Back</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}
export default withStyles(styles)(SingleColorPalette);
