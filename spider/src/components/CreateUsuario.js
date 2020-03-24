import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import {setUsuarios, ChangeUsuario,ChangeContraseña} from '../store'

export default connect((props) => {
    return props
    },
    {
        setUsuarios,
        ChangeUsuario,
        ChangeContraseña
    })
    ( class CreateUsuario extends Component  {

    componentDidMount(){
        this.getUsuarios();
       
    }

    getUsuarios = async () =>{
        const res = await axios.get('http://localhost:4000/api/usuarios');
        this.props.setUsuarios(res.data)
        console.log(this.props.usuarios)
    }

    onChangeUsuario = (e) => {
        this.props.ChangeUsuario(
            e.target.value
        ) 
    }

    onChangeContraseña = (e) => {
        this.props.ChangeContraseña(
            e.target.value
        )
    }

    deleteUser= async(id)=>{
        // Cambio Directo
        await axios.delete('http://localhost:4000/api/usuarios/' + id)
        this.getUsuarios();
    }

    onSubmit=  async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/api/usuarios',{
            usuario: this.props.username,
            contraseña:this.props.contraseña
        })
        this.getUsuarios();
        this.props.ChangeUsuario('');
        this.props.ChangeContraseña('');



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
                                value={this.props.username}
                                onChange={this.onChangeUsuario} />
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control" 
                                placeholder="¿Quien Registra?" 
                                value={this.props.contraseña} 
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
                            this.props.usuarios.map(user => (
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
})
