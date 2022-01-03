import {useParams} from "react-router-dom"
import {useGetExpense} from "../../../services/useGetExpense";
import {PageNotFound} from "../../common/PageNotFound";
import {SingleView} from "../../Core/SingleView";

export function Expense() {

    let params = useParams();
    const [itemInstance, itemState] = useGetExpense(params.id)
    if (itemState === "fetching") {
        return null
    }
    if (!itemInstance) {
        return <PageNotFound/>
    }
    // TODO(change itemInstance to display category instead of categoryId)
    return (<SingleView name={"expenses"} item={itemInstance} keys={["name", "category", "cost", "date"]}/>)

}