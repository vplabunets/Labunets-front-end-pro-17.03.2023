import React from 'react'
import {ListItem} from "../ListItem/ListItem";

export function ListGroup({listData}) {
    return (
        <ul className="list-group">
            {listData.map(element => {
                const {id, text} = element
                return <ListItem key={id} text={text}/>
            })
            }
        </ul>
    )
}
