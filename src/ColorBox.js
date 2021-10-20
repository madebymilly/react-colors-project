import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';

import './styles/ColorBox.css';

class ColorBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 value: '',
			 copied: false
		}
		this.handleCopy = this.handleCopy.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	handleCopy() {
		this.setState({
			value: this.props.background,
			copied: true
		}, () => {
			setTimeout(() => this.setState({copied: false}), 2000);
		});
	}
	handleClick(e) {
		// console.log('stop prop', e);
		e.stopPropagation();
	}
	render() {
		const { background, name, paletteID, id: colorID, showLink } = this.props;
		const { copied } = this.state;
		const darkColor = chroma(background).luminance() <= 0.08 ? true : false;
		const lightColor = chroma(background).luminance() >= 0.7 ? true : false;
		return (
			<div style={{ background }} className={`ColorBox ${darkColor && 'ColorBox--dark'} ${lightColor && 'ColorBox--light'}`}>
				<div style={{ background }} className={`ColorBox__copy-overlay ${copied && 'ColorBox__copy-overlay--show'}`}></div>
				<div className={`ColorBox__copy-overlay-info ${copied && 'ColorBox__copy-overlay-info--show'}`}>
					<h1>copied!</h1>
					<p>{background}</p>
				</div>
				<div className="ColorBox__container">
					<div className="ColorBox__content">
						<span>{name}</span>
					</div>
					<CopyToClipboard text={background} onCopy={this.handleCopy}>
						<button className="ColorBox__button">Copy</button>
					</CopyToClipboard>
				</div>
				{showLink &&
					<Link 
						exact 
						to={`/palette/${paletteID}/${colorID}`}
						onClick={this.handleClick}
						className="ColorBox__more"
					>
						More
					</Link>
				}
			</div>
		);
	}
}
export default ColorBox;
