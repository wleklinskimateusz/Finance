import {useGetExpenses} from "../../../services/useGetExpenses";
import {Table} from "../../common/Table";
import {TableRow} from "../../common/TableRow";
import {Link} from "react-router-dom";

export function ExpenseList() {
    const rows = useGetExpenses();
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div className={"divider"} />
            <div>
                <Link to={"/expenses/new"} className={"btn btn-secondary"}>New Expense</Link>
            </div>
            <div className={"divider"} />

            <div>
                <Table headers={(
                    <tr>
                        <th/>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Cost</th>
                    </tr>)
                }>
                    {rows.map(item => (
                        <TableRow number={item.number} key={item.number} cols={Object.values(item.cols)}
                                  url="expenses"/>))}

                </Table>
            </div>

        </div>
    )
}