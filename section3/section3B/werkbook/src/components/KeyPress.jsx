import React from 'react'
import { useState } from 'react'
import Card from '../UI/Card'
import classes from '../styles/KeyPress.module.css'

const KeyPress = () => {
    const [keyCode, setKeyCode] =  useState()
    window.addEventListener('keypress', (e) => {setKeyCode(e.keyCode)})
    return (
        <Card>
            <h1>Key Code Translator</h1>
            <h3>Press any key, and see what it's key code is</h3>
            <div className={classes.container} id="output">{keyCode}</div>
        </Card>
    )
}

export default KeyPress
