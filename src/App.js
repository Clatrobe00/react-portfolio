import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import Resume from './pages/Resume';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Router basename="/react-portfolio">
        <div>
          <NavBar />
            <Container>
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
          </Container>
        </div>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
