import React from 'react'
import PropTypes from 'prop-types'

import './Modal.css'

const Modal = ({
  isActive,
  handleCloseModal,
  children,
  widthPx
}) => (
  <div className={`ll-modal ${isActive ? 'is-active' : ''}`}>
    {
      // toggleHtml(isActive)
    }
    <div className='ll-modal-background' onClick={() => onCloseModal(handleCloseModal)} />
    <div style={{ width: `${widthPx}px` }} className='ll-modal-container'>
      {children}
    </div>
  </div>
)

const onCloseModal = async handleCloseModal => {
  handleCloseModal()
}

Modal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  widthPx: PropTypes.number
}

export default Modal
