import {Link, useParams} from "react-router-dom"
import {useGetExpense} from "../../../services/useGetExpense";
import {Card} from "../../common/Card";
import {PageNotFound} from "../../common/PageNotFound";

export function Expense() {
    let params = useParams();
    const [expense, expenseState] = useGetExpense(params.expenseId)
    if (expenseState === "fetching") {
        return null
    }
    if (!expense) {
        return <PageNotFound />
    }
    return (
        <div className="flex justify-center items-center">
            <Card
                title={expense?.id}
                actions={
                    <Link to="/expenses/list">
                        <div
                            className="btn btn-primary">
                            Back
                        </div>
                    </Link>
                }
            >
                <p>Category: Groceries</p>
                <p>Cost: 12.5zł</p>
                <p>Date: 12.12.2021</p>
            </Card>
        </div>
    )
}