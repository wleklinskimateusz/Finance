export function NavItem(props) {
    return (
        <a href={props.to} class="btn btn-ghost btn-sm rounded-btn">
            {props.children}
        </a> 
    )
}