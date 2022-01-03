import {Card} from "../../common/Card"
import {NewExpenseForm} from "../../forms/NewExpenseForm";
import {useState} from "react";
import {Alert} from "../../common/Alert";
import {Link} from "react-router-dom";

export function NewView(name, form) {


    return (

        <div className="flex justify-center items-center">
            <div className={"col-auto flex flex-col justify-center items-center"}>
                <Link to={`/${name}/list`} className={"btn btn-secondary my-5"}>Go Back</Link>

                <Card title={`New ${name.toUpperCase()}`}>
                    {form}


                </Card>

            </div>
        </div>

    )
}