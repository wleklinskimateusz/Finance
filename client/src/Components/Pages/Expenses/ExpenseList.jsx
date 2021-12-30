import { useGetExpenses } from "../../../services/useGetExpenses";
import { Table } from "../../common/Table";
import { TableRow } from "../../common/TableRow";

export function ExpenseList(props) {
    const rows = useGetExpenses();
    return (
    <div>
        <Table headers={(
        <tr>
            <th></th> 
            <th>Name</th> 
            <th>Date</th> 
            <th>Category</th>
            <th>Cost</th>
        </tr>)
        }>
            {rows.map(item => (<TableRow number={item.number} key={item.number} cols={Object.values(item.cols)} url="expenses"/>))}
            
        </Table>
    </div>
    )
}