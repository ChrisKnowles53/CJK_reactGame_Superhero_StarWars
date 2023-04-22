import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
import LandingPage from './LandingPage';
import SuperheroGame from './SuperheroComponents/SuperheroGame';
//import StarWarsGame from './StarWarsGame';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/SuperheroComponents/SuperheroGame">
          <SuperheroGame />
        </Route>
        {/* <Route path="/starwars">
          <StarWarsGame />
        </Route> */}
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;