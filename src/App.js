import React from "react"
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import VessleShow from "./pages/VessleShow"
import Home from "./pages/Home";
import ViewVessles from "./pages/ViewVessles";
import AddVesslePage from "./pages/AddVesslePage";

function App() {

  const [vessles, setVessles] = useState([])


  const match = useRouteMatch()
  console.log(match)






  useEffect(() => {
    fetch("/vessles")
      .then((resp) => resp.json())
      .then(vessles => setVessles(vessles))
  }, [])

  // async function handleAddVessle(vessleData) {

  //   //   const resp = await fetch("/vessles", {
  //   //     method: "POST",
  //   //     headers: {
  //   //       "Content-Type": "application/json",
  //   //     },
  //   //     body: JSON.stringify(vessleData),
  //   //   })
  //   //   if (!resp.ok) {
  //   //     console.error('error adding ' + vessleData)
  //   //     return false
  //   //   }
  //   //   const newVessle = await resp.json()
  //   //   setVessles([...vessles, newVessle])
  //   //   return true
  //   // }

  function handleAddVessle(newVessle) {
    setVessles([...vessles, newVessle])
  }


  async function handleDeleteVessle(vessleId) {
    const resp = await fetch("/vessles/" + vessleId, { method: "DELETE" })
    if (!resp.ok) {
      console.error('error deleting ' + vessleId)
      return false
    }
    const updatedVessles = vessles.filter((vessle) => vessle.id !== vessleId);
    setVessles(updatedVessles);
    return true
  }





  return (

    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/vessles/addvessle">
          <AddVesslePage addVessle={handleAddVessle} />
        </Route>
        <Route exact path="/vessles/:id" >
          <VessleShow vessles={vessles} deleteVessle={handleDeleteVessle} />
        </Route>
        <Route exact path="/vessles">
          <ViewVessles vessles={vessles} />
        </Route>
      </Switch>
    </Router >


  );
}

export default App;
