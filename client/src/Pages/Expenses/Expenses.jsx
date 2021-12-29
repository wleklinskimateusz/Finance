import { Outlet } from "react-router-dom"


export function Expenses(props) {
    console.log(props.children)
    return (<div><Outlet /></div>)
}