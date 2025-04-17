import React from 'react';
import Header from '../src/components/Header/Header';
import Home from '../src/pages/Home/Home';
import About from '../src/pages/About/About';
// import Services from '../src/pages/Services/Services';
import Portfolio from '../src/pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Footer from '../src/components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Add IDs to sections for smooth scrolling */}
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        {/* <section id="services">
          <Services />
        </section> */}
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;