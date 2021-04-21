import ProjectCard from '../components/project-card/ProjectCard';
import musicSpiderGif from '../assets/gifs/Music-Spider.gif';
import liaBanner from '../assets/pictures/ChineseLanterns.jpg';
import cyoaBanner from '../assets/pictures/Castaway.jpg';
import { Container, CardDeck, Card, Col, Row } from 'react-bootstrap';
import comingSoon from '../assets/pictures/ComingSoon.jpg';
import learningApp from '../assets/pictures/learningApp.jpg';
import burgerLogger from '../assets/pictures/burgerLogger.jpg';


const Portfolio = () => {
    return (
        <Container>
                <Row>
                <Col>
                    <ProjectCard src={musicSpiderGif} name='Music Spider' description='A music finding app that allows the user to search up songs by lyrics and discover cool new artists.' link='https://inesr19.github.io/Project-1/' repo='https://github.com/Clatrobe00/Music-Spider' children='Find some music'/>
                </Col>    
                <Col>
                    <ProjectCard src={liaBanner} name='Lia Liu Chinese' description='A website for Lia Liu Chinese built with React.' link='https://lia-liu-chinese.herokuapp.com/' repo='https://github.com/Clatrobe00/liachinese' children='Learn Chinese'/>
                </Col>
                <Col>
                    <ProjectCard src={cyoaBanner} name='Castaway: Flight of the Phoenix' description='A choose-your-own-adventure style game that challenges the user to escape an alien planet.'
                    link='https://cyoa-rpg.herokuapp.com/' repo='https://github.com/Clatrobe00/CYOA' children='Try your luck'/>
                </Col>
                </Row>
                <Row>
                <Col>
                    <ProjectCard src={comingSoon} name='Google Books Search' description='A full stack MERN application that allows the user to search books through Google Books, and then save books to or delete books from their collection.' link='https://clb-google-books-search.herokuapp.com/' repo='https://github.com/Clatrobe00/google-books-search' children='Find your next book'/>
                </Col>
                <Col>
                    <ProjectCard src={learningApp} name='Language Learning App' description='A mobile-first language learning app for children.' repo='https://github.com/kurtp23/language-app' link='https://github.com/kurtp23/language-app' children='Expand your mind'/>          
                </Col>    
                <Col>
                    <ProjectCard src={burgerLogger} name='The Burger Logger' description='A full-stack app built with Node, Express, SQL, and HandleBars.' repo='https://github.com/Clatrobe00/Burger-Logger' link='https://burger-logger-clb.herokuapp.com/' children='Grab a burger'/>
                </Col>
                </Row>  
        </Container>
    )
}

export default Portfolio;