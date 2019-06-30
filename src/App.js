import React from 'react';
import './App.css';
import Header from './Components/Header';
import BrandCarousel from './Components/BrandCarousel';
import Footer from './Components/Footer';
import Catalog from './Sections/Catalog';


class App extends React.Component {
  render () {
    return (
      <div>

      <Header />
      <Catalog />
      <BrandCarousel />
      <Footer />

      </div>
    );
  }
}

export default App;