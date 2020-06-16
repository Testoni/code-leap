import React from 'react'
import PropTypes from 'prop-types'

import './Input.css'

const Input = ({ id, type, name, onChange, value, placeholder }) => (
    <input placeholder={placeholder} id={id} type={type} name={name} onChange={onChange} value={value} />
)

const { string } = PropTypes

Input.propTypes = {
    id: string.isRequired,
    type: string.isRequired,
    name: string.isRequired,
}

export default Input