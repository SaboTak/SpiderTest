import React, { Component } from 'react'
import axios from 'axios'


export default class CreateLibro extends Component {

    state={
        users:[],
        userSelect:'',
        titulo:'',
        imagen:'',
        precio: 0,
        edit:false,
        _id: ''
    }

    async componentDidMount(){
        console.log(this.props.match.params.id)

       const res = await axios.get('http://localhost:4000/api/usuarios');
       this.setState({
           users: res.data.map(user => user.usuario),
           userSelect: res.data[0].usuario

        })
        if(this.props.match.params.id){
            const res =await axios.get('http://localhost:4000/api/libros/' + this.props.match.params.id);
            console.log(res)
            this.setState({
                titulo: res.data.titulo,
                imagen: res.data.imagen,
                precio: res.data.precio,
                autor: res.data.autor,
                edit:true,
                _id: this.props.match.params.id
            })
        }
    }


    onSubmit =async (e) =>{
        e.preventDefault();
        const newLibro ={
            titulo: this.state.titulo,
            imagen:this.state.imagen,
            precio:this.state.precio,
            autor:this.state.userSelect
        };
        if(this.state.edit){
            await axios.put('http://localhost:4000/api/libros/' + this.state._id, newLibro);

        }else{

            await axios.post('http://localhost:4000/api/libros',newLibro);
        }
        window.location.href = '/libros'

    }

    onInputChange = e => {
        this.setState({
           [e.target.name] : e.target.value
        })
    }


    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Ingresa tu libro!</h4>

                    {/* seleccionar usuario */}
                    <div className="form-group">
                        <select
                        className="form-control"
                        name="userSelect"
                        onChange={this.onInputChange}
                        value={this.state.userSelect}
                        >
                            {
                                this.state.users.map(user => 
                                <option key={user} value={user}>
                                    {user}
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
                        value={this.state.titulo}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control"
                        placeholder="Link de la imagen"
                        name='imagen'
                        onChange={this.onInputChange}
                        value={this.state.imagen}
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
                        value={this.state.precio}
                        min="1"
                        />
                    </div>
                    <form onSubmit={this.onSubmit}>

                        <button type="submit" className="btn btn-primary">
                            Guardar Libro
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
