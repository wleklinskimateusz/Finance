import React from "react";
import {Alert} from "./Alert";

export function Message({display}: {display: boolean}) {
    return (
        <>
            {
                display && (
                    <>
                        <Alert>New item Added!</Alert>
                        <div className={"divider"}/>
                    </>
                )
            }
        </>
    )
}