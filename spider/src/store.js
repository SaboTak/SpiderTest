import {createStore} from 'redux';

const initialState = {
    libros: [],
    usuarios: []
}


const reducerSpider = (state = initialState, action) => {
    return state
}




export default createStore(reducerSpider)