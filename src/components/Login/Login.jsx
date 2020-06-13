import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import StoreContext from '../../components/Store/Context'
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

    function onChange(e) {
        const { value, name } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    function onSubmit(e) {
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
                    <input id="username" type="text" name="username" autoComplete="off" onChange={onChange} value={values.username} />
                    <button className='button' type='submit'>ENTER</button>
                </form>
            </section>
        </div>
    )
}

export default Login