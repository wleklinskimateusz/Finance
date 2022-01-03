import {Table} from "../../common/Table";
import {Link} from "react-router-dom";
import {useFetch} from "../../../Hooks/useFetch";

export function ExpenseList() {
    const [rows, rowsState] = useFetch("http://localhost:3002/api/expenses");
    if (rowsState !== "finished")
        return null
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div className={"my-5"}>
                <Link to={"/expenses/new"} className={"btn btn-secondary"}>New Expense</Link>
            </div>

            <div>
                <Table data={rows} headers={getHeaders()}>

                </Table>
            </div>

        </div>
    )
}


function getHeaders() {
    return [
        {
            Header: "ID",
            accessor: "id"
        },
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
            accessor: "category"
        },
        {
            Header: "Cost",
            accessor: "cost"
        }
    ]
}