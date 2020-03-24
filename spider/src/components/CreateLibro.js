import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import {setUsers,setUserSelect,setTitulo,setImagen,setPrecio,setAutor,setEdit,setID} from '../store'

// Conectar Store
export default connect((props => {
    return props 
}),{
    setUsers,
    setUserSelect,
    setTitulo,
    setImagen,
    setPrecio,
    setAutor,
    setEdit,
    setID
}
)
( class CreateLibro extends Component {

    async componentDidMount () {
        const res = await axios.get('http://localhost:4000/api/usuarios')
        this.props.setUsers(res.data.map(user => user.usuario))
        console.log(this.props.users)
        this.props.setUserSelect(this.props.users[0])

        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/libros/' + this.props.match.params.id)
            this.props.setTitulo(res.data.titulo)
            this.props.setImagen(res.data.imagen)
            this.props.setPrecio(res.data.precio)
            this.props.setAutor(res.data.autor)
            this.props.setEdit(true)
            this.props.setID(this.props.match.params.id)
        }
    }

    onSubmit =async (e) =>{
        e.preventDefault();
        const newLibro ={
            titulo: this.props.titulo,
            imagen:this.props.imagen,
            precio:this.props.precio,
            autor:this.props.userSelect
        };
        if(this.props.edit){
            await axios.put('http://localhost:4000/api/libros/' + this.props._id, newLibro);

        }else{

            await axios.post('http://localhost:4000/api/libros',newLibro);
        }
        window.location.href = '/libros'

    }

    onInputChange = e => {
        switch (e.target.name) {
            case 'userSelect':
                return this.props.setUserSelect(e.target.value)

            case 'titulo':
                return this.props.setTitulo(e.target.value)
            
            case 'imagen':
                return this.props.setImagen(e.target.value)

            case 'precio':
                return this.props.setPrecio(e.target.value)
            default:
                return 
        }
    }


    render() {
        return (
            <div className="col-md-6 offset-md-3">
            <div className="card card-body clts">
                <h4>Ingresa tu libro!</h4>

                {/* seleccionar usuario */}
                <div className="form-group">
                    <select
                    className="form-control"
                    name="userSelect"
                    onChange={this.onInputChange}
                    value={this.props.userSelect}
                    >
                        {
                            this.props.users.map(user =>                                 
                            <option key={user} value={user}>
                                {"Autor: " + user}
                            </option>
                            )
                        }
                    </select>
                </div>
                <div className="form-group">
                        <input type="text"
                        className="form-control"
                        placeholder="Titulo"
                        name='titulo'
                        onChange={this.onInputChange}
                        value={this.props.titulo}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control"
                        placeholder="Link de la imagen"
                        name='imagen'
                        onChange={this.onInputChange}
                        value={this.props.imagen}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <input type="number"
                        className="form-control"
                        placeholder="Precio"
                        name='precio'
                        required
                        onChange={this.onInputChange}
                        value={this.props.precio}
                        min="1"
                        />
                    </div>
                    <form onSubmit={this.onSubmit}>

                        <button type="submit" className="btn btn-primary">
                            Guardar Libro
                        </button>
                    </form>
                </div>
                <div className="Frase ">
                    <p>
                    “...En algún lugar de un libro, hay una frase esperándonos para darle sentido a la existencia...”.
                                                       <p className="AutFrase"> - Cervantes </p>
                    </p>
                </div>
            </div>
        )
    }

})
