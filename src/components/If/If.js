import useStorage from '../../utils/useStorage'

export default props => {
    const [token, setToken] = useStorage('token')

    if (props.username === token) {
        return props.children
    } else {
        return false
    }
}