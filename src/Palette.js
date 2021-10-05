import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './Palette.css'

class Palette extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 level: 500
		}
		this.changeLevel = this.changeLevel.bind(this);
	}
	changeLevel(level) {
		//console.log(level);
		this.setState({ level });
	}
	render() {
		const { colors } = this.props.palette;
		const { level } = this.state;

		const colorBoxes = colors[level].map((color, i) => (
			<ColorBox key={i} background={color.hex} name={color.name} />
		));

		return (
			<div className="Palette">
				<NavBar 
					level={level} 
					changeLevel={this.changeLevel} 
				/>
				<div className="Palette-colors">
					{colorBoxes}
				</div>
				{/* footer eventually */}
			</div>
		);
	}
}
export default Palette;