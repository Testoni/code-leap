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
        axios.get(`${URL}`).then(resp => dispatch({type: 'CONTENT_SEARCHED', payload: resp.data}))
    }
}

export const save = (title, content) => {
    return dispatch => {
        axios.post(URL, { username: 'GABRIEL', title, content })
        .then(_ => dispatch(clear()))
        .then(_ => dispatch(search()))
    }
}

export const remove = content => {
    return dispatch => {
        //axios.delete(`${URL}${content.id}`).then(_ => dispatch(search()))
        axios.delete('http://dev.codeleap.co.uk/careers/72')
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