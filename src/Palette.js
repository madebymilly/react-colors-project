import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';

import './styles/Palette.css'

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
		const { colors, paletteName: name, emoji } = this.props.palette;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((color, i) => (
			<ColorBox key={i} background={color[format]} name={color.name} />
		));

		return (
			<div className="Palette">
				<NavBar 
					level={level} 
					changeLevel={this.changeLevel} 
					handleChange={this.changeFormat}
				/>
				<div className="Palette__colors">
					{colorBoxes}
				</div>
				<footer className="Palette__footer">
					{name}
					<span className='emoji'>{emoji}</span>
				</footer>
			</div>
		);
	}
}
export default Palette;