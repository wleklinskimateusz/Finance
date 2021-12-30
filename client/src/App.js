
import './App.css';
import { NavBar } from './Components/Core/NavBar';
import { History } from './Components/Pages/History';
import { Expenses } from './Components/Pages/Expenses/Expenses';
import { Expense } from './Components/Pages/Expenses/Expense';
import { Home } from './Components/Pages/Home';
import { ExpenseList } from './Components/Pages/Expenses/ExpenseList';
import { Stats } from './Components/Pages/Stats';
import React from "react";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import { NavItem } from './Components/Core/NavItem';
import { NewExpense } from './Components/Pages/Expenses/NewExpense';



function App() {
  

  return (
    <BrowserRouter>
    <div>
      <NavBar brand="Finances">
          <NavItem to="/expenses/list">Expenses</NavItem>
          <NavItem to="/history">History</NavItem>
          <NavItem to="/stats">Stats</NavItem>
      </NavBar>
    </div>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="expenses" element={<Expenses />}>
        <Route path=":expenseId" element={<Expense />} />
        <Route path="list" element={<ExpenseList />} />
        <Route path="new" element={<NewExpense />} />
      </Route>
      <Route path="history" element={<History />} />
      <Route path="stats" element={<Stats />} />
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
