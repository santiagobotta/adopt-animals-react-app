import React from 'react';
import './App.css';

import Header from './Components/Header';
import BrandCarousel from './Components/BrandCarousel';
import Footer from './Components/Footer';

import WhyUs from './Sections/WhyUs';
import Catalog from './Sections/Catalog';
import Stories from './Sections/Stories';
import NewAnimal from './Sections/NewAnimal';
import ContactUs from './Sections/ContactUs';



class App extends React.Component {

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
    switch (this.state) {
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

      <Header />
      {this.renderCurrentSection()}
      <BrandCarousel />
      <Footer />

      </div>
    );
  }
}


export default App;