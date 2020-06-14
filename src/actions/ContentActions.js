import axios from 'axios'

const URL = 'http://dev.codeleap.co.uk/careers/'

export const changeTitle = value => ({
    type: 'TITLE_CHANGED',
    payload: value
})

export const changeContent = event => ({
    type: 'CONTENT_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        axios.get(`${URL}`).then(resp => dispatch({type: 'CONTENT_SEARCHED', payload: resp.data}))
    }
}

export const save = (token, title, content) => {
    return dispatch => {
        axios.post(URL, { username: token, title, content })
        .then(_ => dispatch(clear()))
        .then(_ => dispatch(search()))
    }
}

export const remove = content => {
    return dispatch => {
        axios.delete(`${URL}${content.id}`).then(_ => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'CONTENT_CLEAR' }, search()]
}

export const update = content => {
    return dispatch => {
        axios.put(`${URL}/${content.id}`, { title: content.title, context: content.content})
        .then(_ => dispatch(search()))
    }
}