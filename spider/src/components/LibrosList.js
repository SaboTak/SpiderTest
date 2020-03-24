import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class LibrosList extends Component {

    state={
        libros: []
    }
    componentDidMount(){
        this.getLibros();
    }
    async getLibros(){
        const res =await axios.get('http://localhost:4000/api/libros')
        this.setState({libros:res.data})
    }
    deleteLibro= async (id) =>{
        await axios.delete('http://localhost:4000/api/libros/' + id);
        this.getLibros();
    }


    render() {
        return (
            <div className="row">
                {
                    this.state.libros.map(libro => (
                        <div className="col-md-4 p-2" key={libro._id}>
                            <div className="card">
                            <div className="card-img-top portadas">
                                    <img className="covers" src={libro.imagen} alt={libro._id}/>
                                </div>
                                <div className="card-header">
                                    <h5 className="Titulo">{libro.titulo.toUpperCase()}</h5>
                                </div>
                                <div className="card-body">
                                    <button className="Price btn btn-success"> $ {libro.precio} USD</button>
                                    <p className="Autor">{"Autor: " + libro.autor} </p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <button className="btn btn-danger" onClick={() => {this.deleteLibro(libro._id)}}>
                                        Delete
                                    </button>
                                    <Link  className="btn btn-info" to={"/editar/" + libro._id}>
                                        Editar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
