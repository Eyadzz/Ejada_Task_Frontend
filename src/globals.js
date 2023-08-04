
const setToken = (newToken) => {
    window.localStorage.setItem('token' ,newToken);
}
const getToken = () => window.localStorage.getItem('token')

export {setToken, getToken} 