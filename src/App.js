import React from "react"
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VesselList from "./components/VessleList";
import ViewVessle from "./components/ViewVessle"

function App() {

  return (

    <Router>
      <Navbar />
      <VesselList />
      <Switch>
        <Route path="/:vessleId">
          <ViewVessle />
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
