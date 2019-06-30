import React from 'react';
import '../App.css';

import AnimalCard from '../Components/AnimalCard';

class Catalog extends React.Component {




    
    render () {
        return (
            <div>
      
                <div className="main-section catalog">
                    
                    <div className="title">
                    <h1>Encontrá a tu próximo mejor amigo.</h1>
                    
                    <p>
                        <a className="btn" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Filtrar por categorías »</a>
                        <button className="btn" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Búsqueda avanzada »</button>
                    </p>
                    
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                        <div className="animal-tags-container">
                        <div className="animal-tag">Perros</div>
                        <div className="animal-tag">Gatos</div>
                        <div className="animal-tag">Tortugas</div>
                        <div className="animal-tag">Cerdos</div>
                        <div className="animal-tag">Ñandúes</div>
                        <div className="animal-tag">Ver todas las categorías ···</div>  
                        </div>
                    </div>

                    <div className="collapse multi-collapse" id="multiCollapseExample2">
                        <form className="form-inline">
                        
                        <select className="form-control">
                            <option defaultValue disabled>Categoría</option>
                            <option value="perros">Perros</option>
                            <option value="gatos">Gatos</option>
                            <option value="tortugas">Tortugas</option>
                            <option value="cerdos">Cerdos</option>
                            <option value="nandues">Ñandúes</option>
                            <option value="otros">Otros</option>
                        </select>

                        <div className="separador"></div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="sexo" id="hembra" value="hembra"/>
                            <label className="form-check-label" htmlFor="hembra"><i className="fas fa-venus"></i></label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="sexo" id="macho" value="macho"/>
                            <label className="form-check-label" htmlFor="macho"><i className="fas fa-mars"></i></label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="sexo" id="todos" value="todos"/>
                            <label className="form-check-label" htmlFor="todos">Todos</label>
                        </div>

                        <div className="separador"></div>

                        <select className="form-control">
                            <option defaultValue disabled>Zona</option>
                            <option value="aguada">Aguada</option>
                            <option value="atahualpa">Atahualpa</option>
                            <option value="barriosur">Barrio Sur</option>
                            <option value="buceo">Buceo</option>
                            <option value="carrasco">Carrasco</option>
                            <option value="carrasco norte">Carrasco Norte</option>
                            <option value="centro">Centro</option>
                            <option value="ciudad vieja">Ciudad Vieja</option>
                            <option value="cordon">Cordón</option>
                            <option value="lablanqueada">La Blanqueada</option>
                            <option value="malvin">Malvín</option>
                            <option value="malvinnorte">Malvín Norte</option>
                            <option value="palermo">Palermo</option>
                            <option value="parquebatlle">Parque Batlle</option>
                            <option value="parquerodo">Parque Rodó</option>
                            <option value="prado">Prado</option>
                            <option value="pocitos">Pocitos</option>
                            <option value="puntacarretas">Punta Carretas</option>
                            <option value="trescruces">Tres Cruces</option>
                        </select>

                        <button type="search" className="btn-catalog-search mb-2"><i className="fas fa-search "></i></button>

                        </form>
                    </div>

                    </div>


                    {this.props.animals.map(item => <AnimalCard />)}

                    <div className="card animal-card"><a href="animal.html">
                    <img alt="" src="assets/img/helga.jpg" className="profile-pic"/>
                    <div className="animal-header">
                        <span>Helga Pataki</span>
                        <span className="animal-gender"><i className="fas fa-venus"></i></span>
                    </div>
                    <div className="animal-details">2 años · Pocitos</div>
                    <div className="animal-tags-container"><span className="animal-tag">Perro</span><span className="animal-tag">cachorro</span><span className="animal-tag">Para familias con niños</span></div>
                    </a></div>

                    <div className="card animal-card"><a href="animal.html">
                    <img alt="" src="assets/img/carlos.jpg" className="profile-pic"/>
                    <div className="animal-header">
                        <span>Carlos</span>
                        <span className="animal-gender"><i className="fas fa-mars"></i></span>
                    </div>
                    <div className="animal-details">8 años · Centro</div>
                    <div className="animal-tags-container"><span className="animal-tag">Perro</span><span className="animal-tag">perro guía</span><span className="animal-tag">para personas mayores</span></div>
                    </a></div>
                
                    <div className="card animal-card"><a href="animal.html">
                    <img alt="" src="assets/img/garfield.jpg" className="profile-pic"/>
                    <div className="animal-header">
                        <span>Garfield</span>
                        <span className="animal-gender"><i className="fas fa-mars"></i></span>
                    </div>
                    <div className="animal-details">45 años · Punta Carretas</div>
                    <div className="animal-tags-container"><span className="animal-tag">Gato</span><span className="animal-tag">solo come lasagna</span><span className="animal-tag">PEP</span></div>
                    </a></div>

                    <div className="card animal-card"><a href="animal.html">
                    <img alt="" src="assets/img/bugs.jpg" className="profile-pic"/>
                    <div className="animal-header">
                        <span>Bugs</span>
                        <span className="animal-gender"><i className="fas fa-mars"></i></span>
                    </div>
                    <div className="animal-details">8 años · Ciudad Vieja</div>
                    <div className="animal-tags-container"><span className="animal-tag">conejo</span><span className="animal-tag">movie star</span></div>
                    </a></div>

                    <div className="card animal-card"><a href="animal.html">
                    <img alt="" src="assets/img/tilo.jpg" className="profile-pic"/>
                    <div className="animal-header">
                        <span>Tilo</span>
                        <span className="animal-gender"><i className="fas fa-mars"></i></span>
                    </div>
                    <div className="animal-details">Menos de un año · Prado</div>
                    <div className="animal-tags-container"><span className="animal-tag">Perro</span><span className="animal-tag">recién nacido</span><span className="animal-tag">toma té</span></div>
                    </a></div>

                    <div className="card animal-card"><a href="animal.html">
                    <img alt="" src="assets/img/horacio.jpg" className="profile-pic"/>
                    <div className="animal-header">
                        <span>Horacio</span>
                        <span className="animal-gender"><i className="fas fa-mars"></i></span>
                    </div>
                    <div className="animal-details">112 años · Parque Rodó</div>
                    <div className="animal-tags-container"><span className="animal-tag">Tortuga marina</span><span className="animal-tag">requiere grandes espacios</span><span className="animal-tag">hogar cerca de la playa</span></div>
                    </a></div>

                    <div className="card animal-card"><a href="animal.html">
                    <img alt="" src="assets/img/hamster.jpg" className="profile-pic"/>
                    <div className="animal-header">
                        <span>(Sin nombre aún)</span>
                        <span className="animal-gender"><i className="fas fa-venus"></i></span>
                    </div>
                    <div className="animal-details">Recién nacida · Pocitos</div>
                    <div className="animal-tags-container"><span className="animal-tag">Hamster</span><span className="animal-tag">o cuis capaz</span></div>
                    </a></div>

                    <div className="card animal-card"><a href="animal.html">
                    <img alt="" src="assets/img/charlotte.jpg" className="profile-pic"/>
                    <div className="animal-header">
                        <span>Charlotte</span>
                        <span className="animal-gender"><i className="fas fa-venus"></i></span>
                    </div>
                    <div className="animal-details">4 años · Tres Cruces</div>
                    <div className="animal-tags-container"><span className="animal-tag">Cerdo</span><span className="animal-tag">vive en apto</span></div>
                    </a></div>

                    <div className="btn-final"><a href="newAnimal.html"><button className="btn">Publicá un animal</button></a></div>

                </div>


            </div>

        )
    }
}

export default Catalog;