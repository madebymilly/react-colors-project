import { useState} from 'react';
import { Route, Switch } from "react-router-dom";
import { withStyles } from '@mui/styles';

import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';

import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

const styles = {
  app: {
    //backgroundColor: 'peru',
  },
}

function App(props) {
  const { classes } = props;

  const [allPalettes, setAllPalettes] = useState(seedColors);

  const findPalette = (id) => allPalettes.find( p => p.id === id );

  const savePalette = (newPalette) => {
    setAllPalettes([...allPalettes, newPalette]);
  }
  return (
    <div className={classes.app}>
      <Switch>
        <Route 
          exact
          path="/palette/new/"
          render={(routeProps) => <NewPaletteForm savePalette={savePalette} {...routeProps}/>}
        />
        <Route 
          exact 
          path="/react-colors-project/" 
          render={(routeProps) => <PaletteList palettes={allPalettes} {...routeProps} />}
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
