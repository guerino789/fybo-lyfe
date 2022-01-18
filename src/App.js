import React from "react"
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import VesselList from "./components/VessleList";
import ViewVessle from "./components/ViewVessle"

function App() {

  const [vessles, setVessles] = useState([])
  // console.log(vessles)

  const match = useRouteMatch()
  console.log(match)



  useEffect(() => {
    fetch("http://localhost:3001/vessles")
      .then((resp) => resp.json())
      .then(vessles => setVessles(vessles))
  }, [])

  function handleAddVessle(newVessle) {
    setVessles([...vessles, newVessle])
  }

  function handleDeleteVessle(vessleId) {
    // console.log(vessleId)
    // console.log(vessleId.id)
    const updatedVessles = vessles.filter((vessle) => vessle.id !== vessleId);
    setVessles(updatedVessles);
  }


  return (

    <Router>
      <Navbar />

      <Switch>
        <Route path="/vessles">
          <VesselList onAddVessle={handleAddVessle} vessles={vessles} />
        </Route>
        <Route >
          <ViewVessle handleDeleteVessle={handleDeleteVessle} vessle={vessles} />
        </Route>
      </Switch>
    </Router >


  );
}

export default App;
