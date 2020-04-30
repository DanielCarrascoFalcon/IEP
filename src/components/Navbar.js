import React, { Component } from "react";
import bible from "../assets/images/biblia.svg";
import logo from "../assets/images/logo2.png";

class Navbar extends Component {
    render(){
        return(
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a className="navbar-brand  mr-3" href="#">
                        <img src={logo} alt="logo" style={{ width: '60px' }}/>
                    </a>
                    <a className="navbar-brand  m-1" href="#">
                        <img src={bible} alt="biblia" style={{ width: '35px' }}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <a className="nav-link ml-2  text-white text-uppercase ml-5" href="#">Inicio&nbsp;<i class="fas fa-church"></i> <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white text-uppercase ml-5" href="#">Tareas&nbsp;<i class="fas fa-tasks"></i></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white text-uppercase ml-5" href="#" id="navbarDropdown" role="button"
                                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Áreas
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Operaciones</a>
                                    <a className="dropdown-item" href="#">Finanzas</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="¿Qué busca?" aria-label="Search"/>
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar