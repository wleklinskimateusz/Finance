import { Table } from "../../common/Table";
import { TableRow } from "../../common/TableRow";

export function ExpenseList(props) {
    const rows = [
        {
            id: 1,
            cols: ["Żabka", "26-12-2012", "24.43zł"]
        },
        {
            id: 2,
            cols: ["Biedra", "24-12-2012", "25.21zł"]
        }
    ]
    return (
    <div>
        <Table headers={(
        <tr>
            <th></th> 
            <th>Name</th> 
            <th>Date</th> 
            <th>Cost</th>
        </tr>)
        }>
            {rows.map(item => (<TableRow number={item.id} key={item.id} cols={item.cols} url="expenses"/>))}
            
        </Table>
    </div>
    )
}