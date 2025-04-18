import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import Home from '../src/pages/Home/Home';
import About from '../src/pages/About/About';
import Portfolio from '../src/pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Footer from '../src/components/Footer/Footer';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';

const App: React.FC = () => {
  return (
    <Router>
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="bg-gray-900 text-white">
        <Routes>
          {/* Route for the main page */}
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Home />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="portfolio">
                  <Portfolio />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />

          {/* Route for Project Details */}
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <Footer />
    </Router>
  );
};

export default App;