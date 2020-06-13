import React from 'react'

import './Content.css'

export default function Post() {
    return (
        <div className='post-body'>
            <form>
                <div className='panel-creator'>
                    <h1>What's on your mind?</h1>

                    <span>Title</span>
                    <input placeholder='Hello world' />

                    <span>Content</span>
                    <textarea placeholder='Content here' />

                    <button className='button' type='submit'>CREATE</button>
                </div>
            </form>
        </div>
    )
}