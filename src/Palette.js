import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'

class Palette extends Component {
	render() {
		const colorBoxes = this.props.palette.colors[500].map((color, i) => (
			<ColorBox key={i} background={color.hex} name={color.name} />
		));
		return (
			<div className="Palette">
				{/* Navbar goes here */}
				<div className="Palette-colors">
					{colorBoxes}
				</div>
				{/* footer eventually */}
			</div>
		);
	}
}
export default Palette;
