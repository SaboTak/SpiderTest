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
                <div className="col-md-4">
                    <div className="card cardbody">
                        <h3> Registrar Autor</h3>
                        <form onSubmit={this.onSubmit} >
                            <div className="form-group">
                                <input type="text" 
                                className="form-control"  
                                value={this.state.username}
                                onChange={this.onChangeUsuario} />
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                className="form-control" 
                                value={this.state.contraseña} 
                                onChange={this.onChangeContraseña} />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Registrar
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.usuarios.map(user => (
                                <li className="list-group-item list-group-item-action" 
                                key={user._id}
                                onDoubleClick={() => this.deleteUser(user._id)}
                                >
                                    {user.usuario}
                                    
                                </li>))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
