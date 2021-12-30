import {Link, useLocation} from "react-router-dom";

export function NavItem(props) {
    let current = useLocation();

    const active = current.pathname.includes(props.to)
    console.log(current)
    console.log(props.to)
    return (
        <Link to={props.to} className="btn btn-ghost btn-sm rounded-btn">
            <div className={active ? "text-primary" : ""}>{props.children}</div>
        </Link>
    )
}