import { Route, Switch } from "react-router-dom";
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

const findPalette = (id) => seedColors.find( p => p.id === id );

function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
          exact 
          path="/" 
          render={() => <PaletteList palettes={seedColors}/>}
        />
        <Route 
          exact 
          path="/palette/:id" 
          render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
        />
        <Route render={() => <h1>page not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
