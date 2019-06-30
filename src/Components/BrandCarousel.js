import React from 'react';
import '../App.css';

class BrandCarousel extends React.Component {
    render () {
        return (
            <div>

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

             </div>
        )
    }
}

export default BrandCarousel;