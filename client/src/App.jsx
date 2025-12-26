import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalVideoBackground from './components/GlobalVideoBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Blogs from './components/Blogs';
import Careers from './components/Careers';
import About from './components/About';
import Testimonial from './components/Testimonial';
import LocationMap from './components/LocationMap';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalVideoBackground />
        <Navbar />
        <Hero />
        <InfoSection />
        <Products />
        <Gallery />
        <Blogs />
        <Careers />
        <About />
        <Testimonial />
        <LocationMap />
        <ContactForm />
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
