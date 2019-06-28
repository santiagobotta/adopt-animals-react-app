import React from 'react';
import './App.css';

class App extends React.Component {
  render () {
    return (

      <body>
        
      {/* HERO CONTAINER*/}
      <div className="hero-container-home">
        
        {/* NAVBAR - SE ROMPE EN MENOR VW*/}
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand"><img alt="" src="assets/img/logo.png"></img></a>
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

      {/* CATALOG*/}
      
      <div className="main-section catalog">
        
        <div className="title">
          <h1>Encotrá a tu próximo mejor amigo.</h1>
          
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
                <option selected disabled>Categoría</option>
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
                  <label className="form-check-label" for="hembra"><i className="fas fa-venus"></i></label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="sexo" id="macho" value="macho"/>
                <label className="form-check-label" for="macho"><i className="fas fa-mars"></i></label>
              </div>
              <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="sexo" id="todos" value="todos"/>
                  <label className="form-check-label" for="todos">Todos</label>
              </div>

              <div className="separador"></div>

              <select className="form-control">
                <option selected disabled>Zona</option>
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

      {/* INSTITUCIONAL CAROUSEL*/}
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item carousel-cont-1 active">
              <div className="carousel-text-container">
                  <h1>Donde animales y personas se encuentran.</h1>
                  <p>En Uruguay hay miles de animales buscando un hogar. Y hay miles de personas buscando a su próximo mejor amigo. En Brandname, <b>los ayudamos a encontrarse.</b></p>
              </div>
            </div>
            <div className="carousel-item carousel-cont-2">
                <div className="carousel-text-container">
                  <h1>Encontrá a tu compañero/a perfecto.</h1>
                  <p>En Brandname podés encontrar a la mascota que estás buscando: aparte de buscar por edad o zona, filtrá con etiquetas como <b>cachorro</b>, <b>ideal para familias con niños</b> o <b>perro guía</b>.</p>
                </div>
            </div>
            <div className="carousel-item carousel-cont-3">
                <div className="carousel-text-container">
                  <h1>Historias felices.</h1>
                  <p>Leé en el blog las historias de todas <b>las familias que creamos en Brandname.</b></p>
                  <img alt="" src="assets/img/helga.jpg" className="carousel-historias-img"/><img alt="" src="assets/img/carlos.jpg" className="carousel-historias-img"/><img alt="" src="assets/img/charlotte.jpg" className="carousel-historias-img"/>
                </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="nada"></div>




      
      {/* Optional JavaScript*/}
      {/* jQuery first, then Popper.js, then Bootstrap JS*/}
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </body>
    
    )
  }
  ;
}

export default App;


