import { Link, useParams } from "react-router-dom"
import { Card } from "../../Components/common/Card";

export function Expense(props) {
    let params = useParams();
    const id = params.expenseId
    return (
    <div className="flex justify-center items-center">
        <Card 
            title={"Biedra"} 
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