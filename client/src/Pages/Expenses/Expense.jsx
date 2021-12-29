import { useParams } from "react-router-dom"

export function Expense(props) {
    let params = useParams();
    return (
    <div>Expanse: {params.expenseId}</div>
    )
}