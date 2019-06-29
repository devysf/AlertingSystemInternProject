import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./components/Home";
import AddingAlerts from "./components/AddingAlerts";
import AlertsList from "./components/AlertsList";
import ReportsAlerts from "./components/ReportsAlerts";


function App() {
  return (
      <Router>
        <div className="App">
          <NavBar />
          
          <Route exact path="/" component={Home} />
          <Route exact path="/adding" component={AddingAlerts} />
          <Route exact path="/lists" component={AlertsList} />
          <Route exact path="/lists/:id" component={ReportsAlerts} />
        </div>
      </Router>

  );
}

export default App;