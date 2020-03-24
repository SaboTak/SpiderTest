import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUsuario extends Component {

    state = {
        usuarios: [],
        username: '',
        contraseña: ''
    }

    async componentDidMount(){
        this.getUsuarios();
       console.log(this.state.usuarios)
    }

    getUsuarios = async () =>{
        const res = await axios.get('http://localhost:4000/api/usuarios');
        this.setState({usuarios:res.data});
    }

    onChangeUsuario = (e) => {
        this.setState({
            username:e.target.value
        })
    }

    onChangeContraseña = (e) => {
        this.setState({
            contraseña:e.target.value
        })
    }

    deleteUser= async(id)=>{
        await axios.delete('http://localhost:4000/api/usuarios/' + id)
        this.getUsuarios();
    }

    onSubmit=  async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/api/usuarios',{
            usuario: this.state.username,
            contraseña:this.state.contraseña
        })
        this.getUsuarios();
        this.setState({username:'' , contraseña:''});


    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 clts">
                    <div className="card card-body clts">
                        <h3> Registrar Autor</h3>
                        <form onSubmit={this.onSubmit} >
                            <div className="form-group">
                                <input type="text" 
                                className="form-control" 
                                placeholder="Autor" 
                                value={this.state.username}
                                onChange={this.onChangeUsuario} />
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control" 
                                placeholder="¿Quien Registra?" 
                                value={this.state.contraseña} 
                                onChange={this.onChangeContraseña} />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Registrar
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8 ">
                    <h3 className="card-body aust">Autores Registrados</h3>
                    <ul className="list-group aust ">
                        {
                            this.state.usuarios.map(user => (
                                <li className="list-group-item list-group-item-action clts" 
                                key={user._id}
                                onDoubleClick={() => this.deleteUser(user._id)}
                                >
                                    {"Autor: " + user.usuario} {"-   Agregado por: " + user.contraseña}
                                    
                                </li>))
                        }
                    </ul>
                </div>
                <div className="Frase col-md-12">
                    <p>
                    “...El autor sólo escribe la mitad de un libro. De la otra mitad debe ocuparse el lector...”.
                                                        <p className="AutFrase"> - J. Conrad </p>
                    </p>
                </div>
            </div>
        )
    }
}
