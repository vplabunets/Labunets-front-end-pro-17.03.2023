import React from 'react'
import {Button} from "../Button/Button";

export function BtnGroup({buttonsData}) {
    // console.log(buttonsData)
    return (
        <div className="btn-group" role="group">
            {buttonsData.map(element => {
                const {id, buttonText} = element
                return <Button key={id} buttonText={buttonText}/>
            })
            }
        </div>
    )
}
