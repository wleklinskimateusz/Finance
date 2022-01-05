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
import {Placeholder} from "./Components/Core/Placeholder";
import {SingleView} from "./Components/views/SingleView";
import {ListView} from "./Components/views/ListView";
import {NewView} from "./Components/views/NewView";

function App() {
    const expensesKeys = ["name", "category", "cost", "date"]

    return (
        <BrowserRouter>
            <div>
                <NavBar brand="Finances">
                    <>
                        <NavItem to="/expenses">Expenses</NavItem>
                        <NavItem to="/history">History</NavItem>
                        <NavItem to="/stats">Stats</NavItem>
                    </>
                </NavBar>
            </div>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={"expenses"} element={<Placeholder name={"expenses"}/>}>
                    <Route path=":id"
                           element={
                               <SingleView name={"expenses"} keys={expensesKeys}/>}/>
                    <Route path="list"
                           element={
                               <ListView name={"expenses"} keys={expensesKeys}/>
                           }
                    />
                    <Route path="new"
                           element={
                               <NewView
                                   name={"expenses"}
                                   form={<NewExpenseForm onSuccess={null} />}
                               />
                           }
                    />
                </Route>
                <Route path="history" element={<History/>}/>
                <Route path="stats" element={<Stats/>}/>
                <Route path={"*"} element={<PageNotFound/>}/>

            </Routes>
        </BrowserRouter>

    )
        ;
}

export default App;
