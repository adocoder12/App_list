import React, { useState } from 'react'

import './IntemInput.css'
export default function ItemInput(props) {
    const [input, setInput] = useState("")
    const [valid, setValid] = useState(true)

    const changeInputHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setValid(true)
        }
        setInput(event.target.value)
    }

    const onHandleSubmit = (event) => {
        event.preventDefault()
        if (input.trim().length === 0) {
            setValid(false)
            return;
        }
        setInput("")
        props.onAddItem(input)
    }


    return (
        <div className='contact'>
            <form onSubmit={onHandleSubmit}>
                <div className={`form-control ${!valid ? 'invalid' : ''}`}>
                    {valid && <h2>NOTE:</h2>}

                    <textarea onChange={changeInputHandler} value={input} rows="4" cols="1" placeholder='Writte your mind..🖋️' />

                    {!valid && <label>No note Added⁉️</label>}

                </div>
                <button type='submit'>Writte Down</button>
            </form>
        </div>
    )

}
