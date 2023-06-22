import React from 'react'

import './ItemList.css'
export default function ItemList(props) {
    console.log(props.items)

    const deleteHandler = (item) => {
        props.onDelete(item.id)
    }
    return (
        <ul className='lista'>
            {props.items.map(item => (
                <li className='item' onClick={() => deleteHandler(item)} key={item.id}>{item.text} </li>
            ))}
        </ul>
    )
}
