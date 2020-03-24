import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Nav extends Component {
    render() {
        return (
            <nav  className="navbar navbar-expand-lg navbar-light bg-light main-menuu navbar-collapse">
              <style>
                @import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');
                @import url('https://fonts.googleapis.com/css?family=Lobster+Two:400i&display=swap');
                @import url('https://fonts.googleapis.com/css?family=Lora&display=swap');
                @import url('https://fonts.googleapis.com/css?family=Playfair+Display:500i&display=swap');
              </style>
            <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="https://image.flaticon.com/icons/svg/864/864702.svg" alt="Logo" className="logo"/>
              Spider Books
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="libros">
                      Libros
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="crear">
                     Registrar Libro
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="autores">
                        Registrar Autor
                    </Link>
                </li>
              </ul>
            </div>
            </div>
          </nav>
        )
    }
}
