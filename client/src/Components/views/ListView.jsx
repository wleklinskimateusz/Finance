import {Table} from "../common/Table";
import {Link} from "react-router-dom";
import {useFetch} from "../../Hooks/useFetch";

export function ListView({name, keys}) {
    const [rows, rowsState] = useFetch(`http://localhost:3002/api/${name}`);
    if (rowsState !== "finished")
        return rowsState
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div className={"my-5"}>
                <Link to={`/${name}/new`} className={"btn btn-secondary"}>New {name.toUpperCase()}</Link>
            </div>

            <div>
                {!rows ? (<h2>No data</h2>) : (<Table data={rows} headers={getHeaders(keys)}/>)}
            </div>

        </div>
    )
}


function getHeaders(keys) {
    return keys.map((key) => ({
        Header: key.toUpperCase(),
        accessor: key
    }))
}