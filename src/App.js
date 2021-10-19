import { Route, Switch } from "react-router-dom";
import { withStyles } from '@mui/styles';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import PaletteList from './PaletteList';
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

const findPalette = (id) => seedColors.find( p => p.id === id );
// const findSingleColorPalette = (palette, colorID) =>
//   console.log(palette.colors)
//   //palette.colors.find( c => c.name.toLowerCase() === colorID );

const styles = {
  app: {
    //backgroundColor: 'peru',
  },
}

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.app}>
      <Switch>
        <Route 
          exact 
          path="/react-colors-project/" 
          render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />}
        />
        <Route 
          exact 
          path="/palette/:id" 
          render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
        />
        <Route 
          exact 
          path="/palette/:paletteID/:colorID" 
          render={(routeProps) => <SingleColorPalette 
            palette={generatePalette(findPalette(routeProps.match.params.paletteID))} 
            colorID={routeProps.match.params.colorID}
          />}
        />
        {/* <Route render={() => <h1>page not found</h1>} /> */}
      </Switch>
    </div>
  );
}

export default withStyles(styles)(App);
