import {useForm} from "react-hook-form";
import {useGetCategories} from "../../services/useGetCategories";

export function NewExpenseForm(props) {
    const {register, handleSubmit, reset} = useForm();
    const categories = useGetCategories();
    function onSubmit(data) {
        props.onSubmit(data);
        reset();
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
                    {categories.map(category => (
                        <option key={category}>{category}</option>
                    ))}

                </select>

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">cost</span>
                </label>
                <input {...register("cost", {required: true, min: 0, max: 2000})} type="number" step="0.01"
                       className="input input-bordered"/>
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