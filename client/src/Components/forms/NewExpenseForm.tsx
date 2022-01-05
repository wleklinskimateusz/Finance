import {useForm} from "react-hook-form";
import axios from "axios";
import {useFetch} from "../../Hooks/useFetch";
import React from "react";
import {Category} from "../../Types/Category";

export function NewExpenseForm(props: { onSuccess: any }) {
    const {register, handleSubmit, reset} = useForm();
    const categories: Category[] = useFetch("http://localhost:3002/api/categories");

    function onSubmit(data: { name: string, category: number, cost: number, date: Date, }) {
        axios
            .post("http://localhost:3002/api/expenses/new", data)
            .then(r => console.log(r.data))
            .finally(
            props.onSuccess()

    )
        reset()
    }

    // useEffect(()=> console.log(categories))
    if (categories === null) {
        return <p>Loading...</p>
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input placeholder="name" className="input input-primary input-bordered"
                       type="text" {...register("name", {required: true})}/>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
                <select {...register("category", {required: true})}
                        className="select select-bordered select-primary w-full max-w-xs">
                    {categories.map((category, index) => (
                        <option value={category.id} key={index}>{category.name}</option>
                    ))}

                </select>

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">cost</span>
                </label>
                <input {...register("cost", {required: true, min: 0, max: 2000})} type="number" step="0.01"
                       className="input input-primary"/>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Date</span>
                </label>
                <input {...register("date", {required: true})} type="date" className="input input-primary"/>
            </div>
            <div className={"divider"}/>
            <div className={"form-control"}>
                <input type={"submit"} className={"btn btn-primary"} value={"Submit"}/>
            </div>


        </form>
    )
}