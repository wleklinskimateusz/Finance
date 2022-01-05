import {Link, useParams} from "react-router-dom"
import {Card} from "../common/Card";
import {PageNotFound} from "../common/PageNotFound";
import {useFetch} from "../../Hooks/useFetch";
import React from "react";

export function SingleView({name, keys}: {name: string, keys: string[]}) {
    const params = useParams();
    // TODO(change itemInstance to display category instead of categoryId)
    const [itemInstance, itemState] = useFetch(`http://localhost:3002/api/expenses/${params.id}`)
    if (itemState === "fetching") {
        return null
    }
    if (!itemInstance) {
        return <PageNotFound />
    }
    return (
        <div className="flex justify-center items-center">
            <Card
                title={itemInstance.id}
                actions={
                    <Link to={`/${name}/list`}>
                        <div
                            className="btn btn-primary">
                            Back
                        </div>
                    </Link>
                }
            >
                <>{keys.map((key) => <p>{key.toUpperCase()}: {itemInstance[key]}</p>)}</>
            </Card>
        </div>
    )
}