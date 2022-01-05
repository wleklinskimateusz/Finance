import React from 'react';

export const Alert = (props: { children: JSX.Element }) => (
    <div className="alert alert-success">
        <div className="flex-1">

            <label>{props.children}</label>
        </div>
    </div>
)
