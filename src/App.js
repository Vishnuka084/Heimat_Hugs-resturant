import React from 'react';
// import components
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
      <Hero />
      <Header/>
      <Nav/>
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Reservation />
      <Footer />
      <div className='h-[380px] md:h-[370px]'></div>
    </div>
  );
};

export default App;
