import React, { useState } from 'react'

import ItemInput from '../components/ItemInput'
import ItemList from '../components/ItemList'
import './HomePage.css'

export default function HomePage() {

    const [lista, setLista] = useState([{ text: "Need to buy bread", id: 1 }])

    const onAddHandler = (item) => {
        setLista(prevItem => {
            const updateItem = [...prevItem]
            updateItem.unshift({ text: item, id: Math.random().toString() })
            return updateItem;
        })

    }

    const onDeleteHandler = (itemID) => {
        setLista(prevItem => {
            const updateItem = prevItem.filter(item => item.id !== itemID)
            return updateItem
        })
    }

    //Lista content

    let content = (
        <p style={{ textAlign: 'center', fontSize: "22px", color: "#f2f2f2", marginTop: "15px" }}>No notes found. Maybe add one?</p>
    )

    if (lista.length > 0) {
        content = (<ItemList onDelete={onDeleteHandler} items={lista} />)
    }

    return (
        <div >
            <ItemInput onAddItem={onAddHandler} />
            {content}
        </div>
    )

}
