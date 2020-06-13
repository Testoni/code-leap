import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { remove } from '../../actions/ContentActions'
import './ContentList.css'

const ContentList = props => {
    const renderList = () => {
        const list = props.list || []
        return list.map(content => (
            <div className='panel-list'>
                <header>
                    <span>{content.id} - {content.username} - {content.created_datetime} - {content.title} - {content.content}</span>
                </header>
            </div>
        ))
    }

    return (
        <div>
            {renderList()}
        </div>
    )
}

const mapStateToProps = state => ({list: state.content.list})
const mapDispatchToProps = dispatch => bindActionCreators({ remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContentList)