import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Home(props) {
    const navigate = useNavigate();
    
    useEffect(() => navigate("expenses/list"))
    return <div></div>
}