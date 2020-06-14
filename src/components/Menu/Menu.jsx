import React from 'react'
import { IoMdExit } from 'react-icons/io'
import { useHistory } from "react-router-dom";

import './Menu.css'
import useStorage from '../../utils/useStorage'

const Menu = () => {
    const [token, setToken] = useStorage('token')
    const history = useHistory()

    function logoff() {
        setToken(null)
        history.push('/login')
    }

    return (
        <div className='post-container'>
            <header>
                <span>CodeLeap Network</span>
                <span onClick={() => logoff()} className='icon-header'><IoMdExit /></span>
                <span>{token}</span>
            </header>
        </div>
    )
}

export default Menu