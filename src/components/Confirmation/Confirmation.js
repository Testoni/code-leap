import React from 'react'
import PropTypes from 'prop-types'

import './Confirmation.css'

const Confirmation = ({ isActive, handleClose, handleConfirmation, message }) => (
    <div className={`confirmation ${isActive ? 'is-active' : ''}`}>
        <div className='confirmation-background' onClick={() => onClose(handleClose)} />
        <div className='confirmation-container'>
            <div className='confirmation-content'>
                <span>{message}</span>
                
                <div className='group-buttons'>
                    <button className='btn' onClick={() => onClose(handleClose)}>Cancel</button>
                    <button className='btn' onClick={() => onClose(handleConfirmation)}>OK</button>
                </div>
            </div>
        </div>
    </div>
)

const onClose = async handleClose => {
    handleClose()
}

const onConfirmation = async handleConfirmation => {
    handleConfirmation()
}

Confirmation.propTypes = {
    isActive: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    message: PropTypes.string
}

export default Confirmation
