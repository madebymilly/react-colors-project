// const styles = {
//   NewPaletteForm: {
//     backgroundColor: 'grey',
//   }
// }

const styles = () => ({
  root: {
    display: "flex"
  },
  drawer: {
    flexShrink: 0,
    height: "100vh"
  },
  drawerPaper: {
    padding: '1rem'
  },
  buttons: {
    width: "100%",
    display: 'flex'
  },
  button: {
    width: "49%",
    flexBasis: "49%",
    fontSize: '.5rem',
    justifyContent: 'space-between'
  },
  drawerTitle: {
    marginTop: '.5rem !important',
    marginBottom: '.75rem !important'
  }
});

export default styles;