import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Trailers from './components/Trailers';
import Gallery from './components/Gallery';
import News from './components/News';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Hero />
      <About />
      <Trailers />
      <Gallery />
      <News />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
