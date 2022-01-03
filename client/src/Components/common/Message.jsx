import {Alert} from "./Alert";

export function Message({display}) {
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