import React from 'react';
import '../App.css';

class Header extends React.Component {
    render () {
        return (
            <div>

            {/* HERO CONTAINER*/}
            <div className="hero-container-home">
                
            {/* NAVBAR - SE ROMPE EN MENOR VW*/}
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="list.html"><img alt="" src="assets/img/logo.png"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> 
                
                {/* NAVBAR ITEMS*/}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="list.html">Animales buscando hogar<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="App.js">Por qué Brandname</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="App.js">Historias</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="newAnimal.html">Publicar un animal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="App.js">Visitanos</a>
                        </li>
                    </ul>
                    
                    {/* NAVBAR SEARCH*/}
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Encontrá a tu mejor amigo..." aria-label="Buscar"/>
                    <a href="search.html"><i className="fas fa-search "></i></a>
                    </form>
                </div>
            </nav>
                
            {/* RECIÉN LLEGADOS HERO - FALTA CENTRADO Y CENTRADO RESPONSIVE*/}
            <div className="banner">
                <h5>Recién llegado</h5>
                <h1>Pochoclo</h1><p>2 años · Cordón</p>
            </div>
            </div>

        </div>

        )
    }
}

export default Header;