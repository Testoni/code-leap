import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import StoreContext from '../Store/Context'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

import './Login.css';

function initialState() {
    return { username: '' }
}

function login({ username }) {
    return { token: username }
}

const Login = () => {
    const [values, setValues] = useState(initialState)
    const { setToken } = useContext(StoreContext)
    const history = useHistory()

    const onChange = e => {
        const { value, name } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        
        const { token } = login(values)
        
        if (token) {
            setToken(token)
            return history.push('/')
        }
        setValues(initialState)
    }

    return (
        <div className='logon-container'>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <h1>Welcome to CodeLeap network!</h1>
                    <span>Please enter your username</span>
                    <Input id="username" type="text" name="username" onChange={onChange} value={values.username} />
                    <Button type='submit' label='ENTER' />
                </form>
            </section>
        </div>
    )
}

export default Login