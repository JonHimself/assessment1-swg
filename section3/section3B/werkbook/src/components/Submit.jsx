import React from 'react'
import { useState } from 'react'
import Card from '../UI/Card'
import classes from '../styles/Submit.module.css'


const Submit = () => {
    const [formState, setFormState] = useState(false)
    const onClickHandler = (e) => {
        e.preventDefault()
        setFormState({name: e.target[0].value, age: e.target[1].value, eyeColor: e.target[2].value})
        
    }

    return (
        <Card>
        <div className={classes.container}>
            <form id="submit-me" className={classes.form} onSubmit={onClickHandler}>
                <input id="name"/>
                <input id="age"/>
                <input id="eyecolor" />
                <button>Click Me</button>
            </form>
            {formState && <div className={classes.info}>{`Name: ${formState.name} Age: ${formState.age} Eye color: ${formState.eyeColor}`}</div>}
        </div>
        </Card>
    )
}

export default Submit
