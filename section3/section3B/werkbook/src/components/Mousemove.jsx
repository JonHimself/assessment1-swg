import React from 'react'
import { useState } from 'react'
import Card from '../UI/Card'
import classes from '../styles/Mousemove.module.css'

const Mousemove = () => {
    const [coords, setCoords] = useState('')
    window.addEventListener("mousemove", (e) => {setCoords(`${e.clientX}, ${e.clientY}`)});
    return (
        <Card>
            <h1>x and y</h1>
            <h3>move your mouse in the box to see the coordinates of your mouse</h3>
            <div className={classes.red}><p>{coords}</p></div>
        </Card>
    )
}

export default Mousemove
