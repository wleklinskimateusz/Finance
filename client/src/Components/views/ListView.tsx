import {Table} from "../common/Table";
import React from "react";
import {Link} from "react-router-dom";
import {useFetch} from "../../Hooks/useFetch";
import {Expense} from "../../Types/Expense";
import {Header} from "../../Types/Header";

export function ListView({name, keys}: {name: string, keys: string[]}) {
    const rows: Expense[] | undefined = useFetch(`http://localhost:3002/api/${name}`);
    if (rows === undefined)
        return null
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




function getHeaders(keys: string[]): Header[] {
    return keys.map((key) => ({
        Header: key.toUpperCase(),
        accessor: key
    }))
}