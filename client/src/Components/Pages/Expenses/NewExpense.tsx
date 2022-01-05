import {Card} from "../../common/Card"
import {Link} from "react-router-dom";
import React from "react";

export function NewExpense({name, form}: {name: string, form: JSX.Element}) {


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