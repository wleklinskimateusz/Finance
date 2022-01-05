import React from "react";

export function Card(props: { title: string, children: JSX.Element, actions?: JSX.Element }) {
    return (
        <div className=" card card-bordered max-w-lg shadow">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                {props.children}
                <div className="justify-end card-actions">
                    {props.actions}
                </div>
            </div>

        </div>
    )
}