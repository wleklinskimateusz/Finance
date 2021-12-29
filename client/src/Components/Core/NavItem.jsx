import { Link } from "react-router-dom";

export function NavItem(props) {
    return (
        <Link to={props.to} className="btn btn-ghost btn-sm rounded-btn">
            {props.children}
        </Link>
    )
}