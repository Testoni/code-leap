import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { save, changeTitle, changeContent, search } from '../../actions/ContentActions'
import ContentList from './ContentList/ContentList'
import useStorage from '../../utils/useStorage'
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import Button from '../../components/Button/Button'

import './ContentForm.css'

const Content = ({ search, save, title, content, changeTitle, changeContent }) => {
    const [token, setToken] = useStorage('token')

    useEffect(() => {
        search()
    }, [])
    
    const enabled = title.length > 0 && content.length > 0;

    return (
        <div className='post-body'>
            <form>
                <div className='panel-creator'>
                    <h1>What's on your mind?</h1>

                    <span>Title</span>
                    <Input placeholder='Hello world' id='title' name='title' type="text" value={title} onChange={e => changeTitle(e.target.value)} />

                    <span>Content</span>
                    <Textarea placeholder='Content here' id='content' type="text" value={content} onChange={changeContent} />

                    <Button disabled={!enabled} type='submit' onClick={() => save(token, title, content)} label='CREATE' />
                </div>

                <ContentList />
            </form>
        </div>
    )
}

const mapStateToProps = state => ({title: state.content.title, content: state.content.content})

const mapDispatchToProps = dispatch => bindActionCreators({ changeTitle, changeContent, search, save }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Content)