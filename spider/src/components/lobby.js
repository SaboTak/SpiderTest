import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class lobby extends Component {
    render() {
        return (
            <div className="col-md-12 lobby-l">
                <div>
                    <img src="https://image.flaticon.com/icons/svg/864/864702.svg" alt="Logo" className="logol"/>
                </div>
                <div className="Frase col-md-12 lobn">
                    <p>
                    “...Los libros son el avión, el tren, el camino. Son el destino y el viaje. Son el hogar...”.
                                                        <p className="AutFrase"> - Anna Quindlen </p>
                    </p>
                </div>
                <div className="lobbyB">
                    <Link to="/libros">
                    <button className="btn btn-success lobbyB"> Obtener Libros</button>
                    </Link>
                    <Link to="/crear">
                    <button className="btn btn-info lobbyB"> Registrar Libro</button>
                    </Link>
                </div>
            </div>
        )
    }
}
