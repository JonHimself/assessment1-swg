import React from 'react'
import { useState } from 'react'
import Card from '../UI/Card'
import classes from '../styles/Change.module.css'

const Change = () => {
    const [inputText, setInputText] = useState('')
    const onChangeHandler = (e) => {
        setInputText(e.target.value)
    }
    return (
        <Card>
            <h1>Some Data Binding</h1>
            <div>Type something in the input box, and then press tab or click outside the box</div>
            <input type="text" onChange={onChangeHandler} className={classes.input}/>
            <div>{inputText}</div>
        </Card>
    )
}

export default Change
