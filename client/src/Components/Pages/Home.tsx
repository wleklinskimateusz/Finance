import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    useEffect(() => navigate("expenses/list"))
    return <div/>
}