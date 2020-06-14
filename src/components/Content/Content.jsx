import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { save, changeTitle, changeContent, search } from '../../actions/ContentActions'
import ContentList from '../../components/ContentList/ContentList'

import './Content.css'

class Content extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        const { save, title, content, changeTitle, changeContent } = this.props
        const enabled = title.length > 0 && content.length > 0;

        return (
            <div className='post-body'>
                <form>
                    <div className='panel-creator'>
                        <h1>What's on your mind?</h1>

                        <span>Title</span>
                        <input placeholder='Hello world' id='title' type="text" value={title} onChange={changeTitle} />

                        <span>Content</span>
                        <textarea placeholder='Content here' id='content' type="text" value={content} onChange={changeContent} />

                        <button disabled={!enabled} className='button' type='submit' onClick={() => save(title, content)}>CREATE</button>
                    </div>

                    <ContentList />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({title: state.content.title, content: state.content.content})

const mapDispatchToProps = dispatch => bindActionCreators({ changeTitle, changeContent, search, save }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Content)