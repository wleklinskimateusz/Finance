export function Alert(props) {
    return (
        <div className="alert alert-success">
            <div className="flex-1">

                <label>{props.children}</label>
            </div>
        </div>
    )
}