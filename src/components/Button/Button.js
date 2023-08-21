import classNames from "classnames";
import React from "react"

export function Button({buttonText}) {
    let buttonClass = "btn btn-primary"
    const onClickHandler = () => {
        buttonClass = classNames(...buttonClass, {
            "active": buttonText === "left"
        }, {
            "active": buttonText === "right"
        })
    }
    return (
        <button type="button" onClick={onClickHandler}
                className={buttonClass}>{buttonText.toUpperCase()}</button>
    )
}


