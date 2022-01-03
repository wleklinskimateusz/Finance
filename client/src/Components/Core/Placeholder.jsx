import {Outlet, useLocation, useNavigate} from "react-router-dom"
import React, {useEffect} from "react";
import {Message} from "../common/Message";


export function Placeholder(name, display) {
    const navigate = useNavigate();
    const current = useLocation();
    useEffect(() => {
        if (current.pathname === `/${name}`) {
            navigate(`/${name}/list`)
        }

    })


    return (
        <div>
            <Message display={display}/>
            <Outlet/>
        </div>)
}