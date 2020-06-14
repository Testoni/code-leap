import {
    TITLE_CHANGED,
    CONTENT_CHANGED,
    CONTENT_SEARCHED,
    CONTENT_CLEAR
} from '../actions/actionTypes'

const INITIAL_STATE = { title: '', content: '' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TITLE_CHANGED:
            return { ...state, title: action.payload}
        case CONTENT_CHANGED:
            return { ...state, content: action.payload}
        case CONTENT_SEARCHED:
            return { ...state, list: action.payload.results }
        case CONTENT_CLEAR:
            return { ...state, title: '', content: '' }
        default:
            return state
    }
}