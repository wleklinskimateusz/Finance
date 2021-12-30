import {useState} from "react"
import {useNavigate} from "react-router-dom";

export function TableRow(props) {
    const [isHovered, setIsHovered] = useState(false);
    let navigate = useNavigate();

    return (
        <tr {...props.row.getRowProps()} className={isHovered ? "hover" : ""}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => {
                navigate(`/${props.url}/${props.number}`)
            }}
        >
            {props.children}
        </tr>
    )
}