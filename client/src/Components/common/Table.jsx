import {useMemo} from "react";
// noinspection ES6CheckImport
import {useTable} from "react-table";
import {TableRow} from "./TableRow";

export function Table(props) {
    const raw_data = props.data
    const raw_headers = props.headers
    const data = useMemo(
        () => raw_data, [raw_data]
    )
    const columns = useMemo(
        () => raw_headers, [raw_headers]
    )
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data})

    return (
        <div className="overflow-x-auto flex justify-center">
            <table {...getTableProps()} className="table max-w-lg table-bordered shadow">
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {
                                        column.render('Header')
                                    }
                                </th>
                            ))
                        }
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <TableRow row={row} number={row.id} url={"expenses"}>
                                {
                                    row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })
                                }
                            </TableRow>
                        )
                    })
                }

                </tbody>
            </table>
        </div>)
}