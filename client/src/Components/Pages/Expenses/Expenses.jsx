import {Outlet, useLocation, useNavigate} from "react-router-dom"
import {useEffect} from "react";


export function Expenses() {
    const navigate = useNavigate();
    const current = useLocation();
    useEffect(() => {
        if (current.pathname === "/expenses") {
            navigate("/expenses/list")
        }

    })


    return (<div><Outlet/></div>)
}