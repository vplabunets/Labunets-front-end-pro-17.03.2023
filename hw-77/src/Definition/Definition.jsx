import React from 'react'

export function Definition({data}) {
    const {dt, dd} = data

    return (
        <>
            <dt className="col-sm-3">{dt}</dt>
            <dd className="col-sm-9">{dd}</dd>
        </>
    )
}

