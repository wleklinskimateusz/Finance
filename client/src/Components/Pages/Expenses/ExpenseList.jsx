import {Table} from "../../common/Table";
import {Link} from "react-router-dom";
import {useFetch} from "../../../Hooks/useFetch";

export function ExpenseList() {
    const [rows, rowsState] = useFetch("http://localhost:3002/api/expenses");
    if (rowsState !== "finished")
        return rowsState
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div className={"my-5"}>
                <Link to={"/expenses/new"} className={"btn btn-secondary"}>New Expense</Link>
            </div>

            <div>{!rows ? (<h2>No data</h2>) : (<Table data={rows} headers={getHeaders()} />)}

            </div>

        </div>
    )
}


function getHeaders() {
    return [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: "Date",
            accessor: "date"
        },
        {
            Header: "Category",
            accessor: "categoryId"
        },
        {
            Header: "Cost",
            accessor: "cost"
        }
    ]
}