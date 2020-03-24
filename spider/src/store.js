import {createStore} from 'redux';

const initialState = {
    libros: [],
    usuarios: [],
    users:[],
    userSelect:'',
    titulo:'',
    imagen:'',
    precio: 0,
    edit:false,
    _id: '',
    //Create Usuario
    username: '',
    contraseña: ''
}

const SET_USUARIOS = 'set_usuarios';
export const setUsuarios = (usuarios) => {
    return {
        type: SET_USUARIOS,
        payload: usuarios
    }
}
const SET_USERS = 'set_users';
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }
}
const Change_Usuario = 'change_usuario';
export const ChangeUsuario = (usuario) => {
    return {
        type: Change_Usuario,
        payload: usuario
    }
}
const Change_Contraseña = 'change_contraseña';
export const ChangeContraseña = (contraseña) => {
    return {
        type: Change_Contraseña,
        payload: contraseña
    }
}
const SET_USER_SELECT = 'set_user_select'
    export const setUserSelect = (userSelect) => {
        return {
            type: SET_USER_SELECT,
            payload: userSelect
        }
    }

const SET_TITULO = 'set_titulo'
export const setTitulo = (titulo) => {
    return {
        type: SET_TITULO,
        payload: titulo
    }
}

const SET_IMAGEN = 'set_imagen'
export const setImagen = (imagen) => {
    return {
        type: SET_IMAGEN,
        payload: imagen
    }
}

const SET_PRECIO = 'set_precio'
export const setPrecio = (precio) => {
    return {
        type: SET_PRECIO,
        payload: precio
    }
}

const SET_AUTOR = 'set_autor'
export const setAutor = (autor) => {
    return {
        type: SET_AUTOR,
        payload: autor
    }
}

const SET_EDIT = 'set_edit'
export const setEdit = (edit) => {
    return {
        type: SET_EDIT,
        payload: edit
    }
}

const SET_ID = 'set_id'
export const setID = (id) => {
    return {
        type: SET_ID,
        payload: id
    }
}
const SET_LIBROS = 'set_libros'
export const setLibros = (libros) => {
    return {
        type: SET_LIBROS,
        payload: libros
    }
}
const reducerSpider = (state = initialState, action) => {
    switch(action.type){
        case SET_USUARIOS:
            return {
                ...state,
                usuarios: action.payload
            }
        case Change_Usuario:
            return {
                ...state,
                username:action.payload
            }
        case Change_Contraseña:
            return {
                ...state,
                contraseña:action.payload
            }
        case SET_USER_SELECT:
            return {
                ...state,
                userSelect: action.payload
            }
        case SET_TITULO:
            return {
                ...state,
                titulo: action.payload
            }
        case SET_IMAGEN:
            return {
                ...state,
                imagen: action.payload
            }
        case SET_PRECIO:
            return {
                ...state,
                precio: action.payload
            }
        case SET_AUTOR:
            return {
                ...state,
                autor: action.payload
            }
        case SET_EDIT:
            return {
                ...state,
                edit: action.payload
            }
        case SET_ID:
            return {
                ...state,
                _id: action.payload
            }
        case SET_LIBROS:
            return {
                ...state,
                libros: action.payload
            }
        case SET_USERS:
            return{
                ...state,
                users:action.payload
            }
        default:
            return state
    }

     
}

export default createStore(reducerSpider)