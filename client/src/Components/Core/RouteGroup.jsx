import {Route} from "react-router-dom";
import {SingleView} from "./SingleView";
import {ListView} from "./ListView";
import React, {useState} from "react";
import {Placeholder} from "./Placeholder";
import {NewView} from "./NewView";
import {AddExtraProps} from "../util/AddExtraProps";

export function RouteGroup({name, keys, form}) {
    const [successful, setSuccessful] = useState(false);
    return (
        <Route path={name} element={<Placeholder name={name} display={successful}/>}>
            <Route path=":id"
                   element={
                       <SingleView name={name} keys={keys}/>}/>
            <Route path="list"
                   element={
                       <ListView name={name} keys={keys}/>
                   }
            />
            <Route path="new"
                   element={<NewView onSuccess={
                       () => setSuccessful(true)
                   } form={
                       AddExtraProps(form, {
                               onSuccess: () => setSuccessful(true)
                           }
                       )}
                   />
                   }
            />
        </Route>
    )
}