import axios from 'axios'

const URL = 'http://dev.codeleap.co.uk/careers/'

export const changeTitle = event => ({
    type: 'TITLE_CHANGED',
    payload: event.target.value
})

export const changeContent = event => ({
    type: 'CONTENT_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const request = axios.get(`${URL}`).then(resp => dispatch({type: 'CONTENT_SEARCHED', payload: resp.data}))
    }
}

export const save = (title, content) => {
    return dispatch => {
        axios.post(URL, { title, content }).then(resp => dispatch(clear())).then(resp => dispatch(search()))
    }
}

export const remove = (content) => {
    return dispatch => {
        axios.delete(`${URL}/${content.id}`).then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'CONTENT_CLEAR' }, search()]
}