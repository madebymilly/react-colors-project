import React from 'react'
import { withStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';

const styles = {
  root: {
    width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.2)'
    }
  },
  content: {
		position: 'absolute',
		width: '100%',
		left: '0px',
		bottom: '0px',
		padding: '10px',
		color: 'rgba(0,0,0,0.7)',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
	},
  deleteIcon: {
    color: 'rgba(0,0,0,0.7)',
    transition: 'all .3s ease !important'
  }
}

function DraggableColorBox(props) {
  const { classes, color, name, deleteBox } = props;

  const handleClick = () => {
    deleteBox(name);
  }

  return (
    <div className={classes.root} style={{backgroundColor: color}}>
      <div className={classes.content}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox);
