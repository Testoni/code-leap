import React from 'react'

import './Button.css'

const Button = ({ label, onClick, type, disabled }) => <button disabled={disabled} className='button' type={type} onClick={onClick}>{label}</button>

export default Button