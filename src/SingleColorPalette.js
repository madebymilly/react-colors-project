import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
	},
	goBack: {
		background: 'black',
		width: '20%',
		height: '50%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		marginBottom: '-3.5px',
	},
	goBackButton: {
		opacity: 1,
		width: '100px',
		height: '30px',
		position: 'absolute',
		display: 'inline-block',
		top: '50%',
		left: '50%',
		marginLeft: '-50px',
		marginTop: '-15px',
		textAlign: 'center',
		outline: 'none',
		background: 'rgba(255, 255, 255, 0.3)',
		fontSize: '1rem',
		lineHeight: '30px',
		color: 'white',
		textTransform: 'uppercase',
		border: 'none',
		cursor: 'pointer',
		textDecoration: 'none',
	}
}

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
		//console.log(val);
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
						<Link to={`/palette/${id}`} className={classes.goBackButton}>Go Back</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}
export default withStyles(styles)(SingleColorPalette);
