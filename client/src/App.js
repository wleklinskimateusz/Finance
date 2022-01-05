import './App.css';
import {NavBar} from './Components/Core/NavBar';
import {History} from './Components/Pages/History';
import {Home} from './Components/Pages/Home';
import {Stats} from './Components/Pages/Stats';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {NavItem} from './Components/Core/NavItem';
import {PageNotFound} from "./Components/common/PageNotFound";
import {NewExpenseForm} from "./Components/forms/NewExpenseForm";
import {RouteGroup} from "./Components/Core/RouteGroup";

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
                <Route path="/" element={<Home/>}/>
                <RouteGroup name={"expense"} keys={["name", "category", "cost", "date"]} form={<NewExpenseForm/>}/>
                <Route path="history" element={<History/>}/>
                <Route path="stats" element={<Stats/>}/>
                <Route path={"*"} element={<PageNotFound/>}/>

            </Routes>
        </BrowserRouter>

    )
        ;
}

export default App;
