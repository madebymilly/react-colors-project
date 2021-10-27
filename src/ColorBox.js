import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';

import './styles/ColorBox.css';

import { withStyles } from '@mui/styles';

const styles = {
  ColorBox: {
		width: '20%',
		height: props => props.showingFullPalette ? '25%' : '50%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		marginBottom: '-3.5px',
		'&:hover button': {
			opacity: '1',
			transition: '0.5s',
		}
	},
	content: {
		position: 'absolute',
		width: '100%',
		left: '0px',
		bottom: '0px',
		padding: '10px',
		color: 'black',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px',
	},
	copyText: {
		color: props => chroma(props.background).luminance() >= 0.6 ? 'black' : 'white',
	},
	colorName: {
		color: props => chroma(props.background).luminance() <= 0.09 ? 'white' : 'black',
	}, 
	seeMore: {
		background: 'rgba(255, 255, 255, 0.3)',
		position: 'absolute',
		border: 'none',
		right: '0px',
		bottom: '0px',
		color: props => chroma(props.background).luminance() >= 0.6 ? 'black' : 'white',
		width: '60px',
		height: '30px',
		textAlign: 'center',
		lineHeight: '30px',
		textTransform: 'uppercase',
		cursor: 'pointer',
		textDecoration: 'none',
		fontSize: '0.9rem',
	},
	copyButton: {
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
		color: props => chroma(props.background).luminance() >= 0.6 ? 'black' : 'white',
		textTransform: 'uppercase',
		border: 'none',
		opacity: '0',
		cursor: 'pointer',
		textDecoration: 'none',
	},
	copyOverlay: {
		opacity: 0,
		zIndex: 0,
		width: '100%',
		height: '100%',
		transform: 'scale(0.1)',
	},
	showOverlay: {
		opacity: 1,
		zIndex: 10,
		transform: 'scale(50)',
		position: 'absolute',
		transition: 'transform 0.5s ease-in-out',
	},
	copyOverlayInfo: {
		position: 'fixed',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		fontSize: '4rem',
		transform: 'scale(0.1)',
		opacity: 0,
		color: 'white',
		'& h1': {
			fontWeight: 400,
			textShadow: '1px 2px rgba(0,0,0,0.5)',
			backgroundColor: 'rgba(255, 255, 255, 0.2)',
			width: '100%',
			textAlign: 'center',
			marginBottom: 0,
			padding: '1rem',
			textTransform: 'uppercase',
		},
		'& p': {
			fontSize: '2rem',
  		fontWeight: 100,
		},
	},
	showOverlayInfo: {
		opacity: 1,
		zIndex: 25,
		transform: 'scale(1)',
		transition: 'transform 0.4s ease-in-out',
		transitionDelay: '0.3s',
	},
}

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
						to={`/palette/${paletteID}/${colorID}`}
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
