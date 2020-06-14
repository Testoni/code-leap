import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FiTrash2 } from 'react-icons/fi'
import { FaRegEdit } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import * as dateUtils from '../../utils/dateUtils'
import { remove, update } from '../../actions/ContentActions'
import If from '../../components/If/If'
import Modal from '../../components/Modal/Modal'
import ModalHeader from '../../components/Modal/modal-header'
import ModalContent from '../../components/Modal/modal-content'

import './ContentList.css'

const ContentList = props => {
    const [open, setOpen] = useState(false)

    function showModal() {
        setOpen(true)
    }

    function hideModal() {
        setOpen(false)
    }

    const renderList = () => {
        const list = props.list || []
        return list.map(content => (
            <div key={content.id}>
                <div className="panel-heading">
                    <span>{content.title}</span>

                    <If username={content.username}>
                        <span onClick={showModal} className='icon-header'><FaRegEdit /></span>
                        <span onClick={() => props.remove(content)} className='icon-header'><FiTrash2 /></span>
                        
                        <Modal isActive={open} handleCloseModal={hideModal} widthPx={800}>
                            <ModalHeader>
                                <div>
                                    <span>Edit Item</span>
                                    <span onClick={hideModal} className='icon-close'><AiOutlineCloseCircle /></span>
                                </div>
                            </ModalHeader>
                            <ModalContent>
                                <span>Title</span>
                                <input className='input-modal' id='title' type="text" value={content.title} />

                                <span>Content</span>
                                <textarea id='content' type="text" value={content.content} />

                                <button onClick={() => props.update(content)} className='button f-right' type='submit'>SAVE</button>
                            </ModalContent>
                        </Modal>
                    </If>
                </div>
                <div className="panel-body">
                    <span className="label-span">{content.username}</span>
                    <span className="label-span date-time">{dateUtils.formatDate(content.created_datetime)}</span>
                    <p className="label-text">{content.content}</p>
                </div>
            </div>
        ))
    }

    return (
        <div className="panel">
            {renderList()}
        </div>
    )
}

const mapStateToProps = state => ({list: state.content.list})
const mapDispatchToProps = dispatch => bindActionCreators({ remove, update }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContentList)