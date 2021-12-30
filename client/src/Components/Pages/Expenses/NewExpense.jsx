import {Card} from "../../common/Card"
import {NewExpenseForm} from "../../Expenses/NewExpenseForm";
import {useState} from "react";
import {Alert} from "../../common/Alert";
import {Link} from "react-router-dom";

export function NewExpense() {

    const [successful, setSuccessful] = useState(false);
    return (

        <div className="flex justify-center items-center">
            <div className={"col-auto flex flex-col justify-center items-center"}>
                <Link to={"/expenses/list"} className={"btn btn-secondary my-5"}>Go Back</Link>
                {successful && (<>
                    <Alert>New Expense Added!</Alert>
                    <div className={"divider"} />
                    </>
                    )}
                <Card title="New Expense">

                    <NewExpenseForm onSubmit={(data) => {
                        console.log(data)
                        setSuccessful(true);
                    }}/>
                </Card>

            </div>
        </div>

    )
}