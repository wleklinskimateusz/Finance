
import './App.css';
import { NavBar } from './Components/Core/NavBar';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { NavItem } from './Components/Core/NavItem';

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar brand="Finances">
          <NavItem to="/expenses">Expenses</NavItem>
          <NavItem to="/history">History</NavItem>
          <NavItem to="/stats">Stats</NavItem>
      </NavBar>
    </div>

    <Routes>
      <Route exact path="/">
        Home
      </Route>
      <Route path="/expenses">
        Expenses
      </Route>
      
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
