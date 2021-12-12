import React from 'react'
import { useState } from 'react'
import Card from '../UI/Card'
import classes from '../styles/Click.module.css'

const Click = () => {
    const [displayState, setDisplayState] = useState('')
    const onClickChangeHandler = () => {
        setDisplayState('none')
    }
    return (
        <Card>
        <h1>Disapearing Box</h1>
        <h3>Click the Box, I dare you</h3>
        <div style={{display: displayState}} className={classes.red} onClick={onClickChangeHandler}></div>
        </Card>
    )
}

export default Click
