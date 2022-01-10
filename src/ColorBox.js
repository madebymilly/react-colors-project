import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@mui/styles';
import styles from './styles/ColorBoxStyles';

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
		const { classes, background, name, paletteID, id: colorID, showingFullPalette } = this.props;
		const { copied } = this.state;
		//console.log(copied);
		// const darkColor = chroma(background).luminance() <= 0.08 ? true : false;
		// const lightColor = chroma(background).luminance() >= 0.7 ? true : false;
		return (
			<div style={{ background }} className={classes.ColorBox}>
				<div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}></div>
				<div className={`${classes.copyOverlayInfo} ${copied && classes.showOverlayInfo}`}>
					<h1>copied!</h1>
					<p className={classes.copyText}>{background}</p>
				</div>
				<div>
					<div className={classes.content}>
						<span className={classes.colorName}>{name}</span>
					</div>
					<CopyToClipboard text={background} onCopy={this.handleCopy}>
						<button className={classes.copyButton}>Copy</button>
					</CopyToClipboard>
				</div>
				{showingFullPalette &&
					<Link 
						exact 
						to={`/react-colors-project/palette/${paletteID}/${colorID}`}
						onClick={this.handleClick}
						className={classes.seeMore}
					>
						More
					</Link>
				}
			</div>
		);
	}
}

export default withStyles(styles)(ColorBox);
