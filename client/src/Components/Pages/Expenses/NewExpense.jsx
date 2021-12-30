import {Card} from "../../common/Card"

export function NewExpense() {
    return (
        <div className="flex justify-center">
            <Card title="New Expense">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input placeholder="name" className="input input-primary input-bordered" type="text"/>


                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select className="select select-bordered select-primary w-full max-w-xs">
                        <option disabled="disabled" selected="selected">Choose your superpower</option>
                        <option>telekinesis</option>
                        <option>time travel</option>
                        <option>invisibility</option>
                    </select>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">cost</span>
                    </label>
                    <input type="number" className="input input-bordered"/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" className="input input-primary"/>
                </div>

            </Card>
        </div>

    )
}