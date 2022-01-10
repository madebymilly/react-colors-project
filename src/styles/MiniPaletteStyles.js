const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    marginBottom: '1rem',
    height: '200px',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  colors: {
    backgroundColor: 'lightgrey',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden' 
  },
  box: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
  },
}

export default styles;