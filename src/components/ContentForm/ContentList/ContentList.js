import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FiTrash2 } from 'react-icons/fi'
import { FaRegEdit } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import * as dateUtils from '../../../utils/dateUtils'
import { remove, update } from '../../../actions/ContentActions'
import If from '../../If/If'
import Modal from '../../Modal/Modal'
import ModalHeader from '../../Modal/modal-header'
import ModalContent from '../../Modal/modal-content'
import Confirmation from '../../Confirmation/Confirmation'
import Input from '../../../components/Input/Input'
import Textarea from '../../../components/Textarea/Textarea'

import './ContentList.css'

const ContentList = props => {
    const [ativeModal, setAtiveModal] = useState(false)
    const [ativeConfirmation, setAtiveConfirmation] = useState(false)
    const [currentContent, setCurrentContent] = useState(null)

    const showModal = content => {
        setCurrentContent(content)
        setAtiveModal(true)
    }

    const hideModal = _ => {
        setAtiveModal(false)
    }

    const showConfirmation = content => {
        setCurrentContent(content)
        setAtiveConfirmation(true)
    }

    const hideConfirmation = _ => {
        setAtiveConfirmation(false)
    }

    const renderList = () => {
        const list = props.list || []

        return list.map(content => (
            <div key={content.id}>
                <div className="panel-heading">
                    <span>{content.title}</span>
                    <If username={content.username}>
                        <span title='Edit' onClick={() => showModal(content)} className='icon-header'><FaRegEdit /></span>
                        <span title='Remove' onClick={() => showConfirmation(content)} className='icon-header'><FiTrash2 /></span>
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

    const enabled = currentContent => (currentContent.title.length > 0 && currentContent.content.length > 0)

    return (
        <div className="panel"> 
            {
                currentContent && 
                <Modal isActive={ativeModal} handleCloseModal={hideModal} widthPx={800} heightPx={350}>
                    <ModalHeader>
                        <div>
                            <span>Edit Item</span>
                            <span onClick={hideModal} className='icon-close'><AiOutlineCloseCircle /></span>
                        </div>
                    </ModalHeader>
                    <ModalContent>
                        <span>Title</span>
                        <Input className='input-modal' id='title' type="text" value={currentContent.title} onChange={e => setCurrentContent({...currentContent, title: e.target.value})} />
    
                        <span>Content</span>
                        <Textarea id='content' type="text" value={currentContent.content} onChange={e => setCurrentContent({...currentContent, content: e.target.value})} />
    
                        <button disabled={!enabled(currentContent)} onClick={() => props.update(currentContent)} className='button f-right' type='submit'>SAVE</button>
                    </ModalContent>
                </Modal>
            }
            {
                currentContent && <Confirmation message='Are you sure you want to delete this item?' isActive={ativeConfirmation} handleClose={hideConfirmation} handleConfirmation={() => props.remove(currentContent)} />
            }

            {renderList()}
        </div>
    )
}

const mapStateToProps = state => ({list: state.content.list})
const mapDispatchToProps = dispatch => bindActionCreators({ remove, update }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContentList)