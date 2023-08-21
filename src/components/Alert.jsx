import React from 'react'
import classNames from "classnames";

export function Alert({type, text}) {

    const alertTypeClass = classNames("alert", type);

    return (
        <div className={alertTypeClass} role="alert">
            <p>{text}</p>
        </div>
    )
}
