import React from 'react';
import './App.css';

import BrandCarousel from './Components/BrandCarousel';
import Footer from './Components/Footer';

import WhyUs from './Sections/WhyUs';
import Catalog from './Sections/Catalog';
import Stories from './Sections/Stories';
import NewAnimal from './Sections/NewAnimal';
import ContactUs from './Sections/ContactUs';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSection: 'home',
      animals: [{
        id: 1,
        name: 'Helga Pataki',
        type: 'dog',
        age: 2,
        zone: 'Pocitos',
        gender: 'F',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        hair: 'negro/marrón oscuro',
        eyes: 'marrón',
        profilePic: './public/assets/helga.jpg',
        tags: ['cachorro', 'para familias con niños'],
        contactInfo: [{
          name: 'Juan Pérez',
          phone: '098 443789',
          email: 'juan-loves-helga@gmail.com'
        }]
      },
      {
        id: 2,
        name: 'Carlos',
        type: 'dog',
        age: 8,
        zone: 'Centro',
        gender: 'M',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        hair: 'negro',
        eyes: 'negros',
        profilePic: './public/assets/helga.jpg',
        tags: ['perro guía', 'para personas mayores'],
        contactInfo: [{
          name: 'Mirta L',
          phone: '098 832743',
          email: 'mirta-l@adinet.com.uy'
        }]
      },
      {
        id: 3,
        name: 'Garfield',
        type: 'cat',
        age: 45,
        zone: 'Punta Carretas',
        gender: 'M',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        hair: 'anaranjado',
        eyes: 'claros',
        profilePic: './public/assets/helga.jpg',
        tags: ['solo come lasagna', 'PEP'],
        contactInfo: [{
          name: 'Yolanda Hollywood',
          phone: '095 894923',
          email: 'yo-yolanda@hotmail.com'
        }]
      }]
    };
  }

  goToHome = () => {
    this.setState({
      currentSection: 'home'
    });
  }

  goToCatalog = () => {
      this.setState({
        currentSection: 'catalog'
      });
  }

  goToWhyUs = () => {
      this.setState({
        currentSection: 'whyUs'
      });
  }

  goToStories = () => {
      this.setState({
        currentSection: 'stories'
      });
  }

  goToNewAnimal = () => {
      this.setState({
        currentSection: 'newAnimal'
      });
  }

  goToContactUs = () => {
      this.setState({
        currentSection: 'contactUs'
      });
  }

  renderCurrentSection() {
    switch (this.state.currentSection) {
    case 'home':
      default:
      return <Catalog />;
    case 'catalog':
      return <Catalog />;
    case 'whyUs':
      return <WhyUs />;
    case 'stories':
      return <Stories />;
    case 'newAnimal':
      return <NewAnimal />;
    case 'contactUs':
      return <ContactUs />;
    }
  }

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
                <span className="nav-link" onClick={this.goToCatalog}>Animales buscando hogar<span className="sr-only">(current)</span></span>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={this.goToWhyUs}>Por qué Brandname</span>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={this.goToStories}>Historias</span>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={this.goToNewAnimal}>Publicar un animal</span>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={this.goToContactUs}>Visitanos</span>
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

      {this.renderCurrentSection()}
      <BrandCarousel />
      <Footer />

      </div>
    );
  }
}


export default App;