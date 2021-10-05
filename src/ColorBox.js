import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './ColorBox.css';

class ColorBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 value: '',
			 copied: false
		}
		this.handleCopy = this.handleCopy.bind(this)
	}
	handleCopy() {
		this.setState({
			value: this.props.background,
			copied: true
		}, () => {
			setTimeout(() => this.setState({copied: false}), 2000);
		});
	}
	render() {
		const { background, name } = this.props;
		const { copied } = this.state;
		return (
			<div style={{ background }} className="ColorBox">
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
				<span className="ColorBox__more">More</span>
			</div>
		);
	}
}
export default ColorBox;
