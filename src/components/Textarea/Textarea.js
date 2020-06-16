import React from 'react'
import PropTypes from 'prop-types'

import './Textarea.css'

const Textarea = ({ id, type, onChange, value, placeholder }) => (
    <textarea placeholder={placeholder} id={id} type={type} value={value} onChange={onChange} />
)

const { string } = PropTypes

Textarea.propTypes = {
    id: string.isRequired,
    type: string.isRequired,
    name: string.isRequired,
}

export default Textarea