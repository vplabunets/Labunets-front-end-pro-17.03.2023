import React from 'react'
import classNames from "classnames";


export function Progress({percentage}) {
    const alertTypeClass = classNames("progress-bar",
        {"bg-success": (percentage === 25)},
        {"bg-info": (percentage === 50)},
        {"bg-warning": (percentage === 75)},
        {"bg-danger": (percentage === 100)}
    )
    return (
        <div className="progress mb-2">
            <div className={alertTypeClass} role="progressbar" aria-valuenow={percentage} aria-valuemin="0"
                 aria-valuemax="100"
                 aria-label="progressbar" style={{width: `${percentage}%`}}> {percentage}%
            </div>
        </div>
    )
}
 