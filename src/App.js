import React from "react";

//import components
import Home from "./pages/Home";
import Details from "./pages/Details";
import Nav from "./components/Nav";
import {Switch , Route } from "react-router-dom";

const App = () => {
  //Fetch all countries URL: https://restcountries.eu/rest/v2/all
  //Fetch searched countries URL: https://restcountries.eu/rest/v2/name/{name}
  return (
    <div className="">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:countryName" component={Details} />
      </Switch>
    </div>
  );
};

export default App;
