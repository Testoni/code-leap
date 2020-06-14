import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as dateUtils from '../../utils/dateUtils'
import { remove } from '../../actions/ContentActions'
import './ContentList.css'

const ContentList = props => {
    const renderList = () => {
        const list = props.list || []
        return list.map(content => (
            <div key={content.id}>
                <div className="panel-heading">{content.title}</div>
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
const mapDispatchToProps = dispatch => bindActionCreators({ remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContentList)