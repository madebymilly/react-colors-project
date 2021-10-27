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

export default styles;