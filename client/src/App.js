
import './App.css';
import { NavBar } from './Components/Core/NavBar';
import { History } from './Pages/History';
import { Expenses } from './Pages/Expenses/Expenses';
import { Expense } from './Pages/Expenses/Expense';
import { ExpenseList } from './Pages/Expenses/ExpenseList';
import { Stats } from './Pages/Stats';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { NavItem } from './Components/Core/NavItem';
import { NewExpense } from './Pages/Expenses/NewExpense';

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
