import userProject from './userProjects'

function setLocalStorage(obj) {
    localStorage.setItem('savedProjects', JSON.stringify(obj))
}

export default setLocalStorage