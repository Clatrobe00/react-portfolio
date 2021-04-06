import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import background from './assets/pictures/hoodStock.png';
import Resume from './pages/Resume'

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
  }}>
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
