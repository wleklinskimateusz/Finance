import { Link, useParams } from "react-router-dom"
import { useGetExpense } from "../../../services/useGetExpense";
import { Card } from "../../common/Card";

export function Expense(props) {
    let params = useParams();
    const item = useGetExpense(params.expenseId)
    return (
    <div className="flex justify-center items-center">
        <Card 
            title={item.cols[0]} 
            actions={
                <Link to="/expenses/list" >
                    <div 
                        className="btn btn-primary" 
                        to="/expenses/list">
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