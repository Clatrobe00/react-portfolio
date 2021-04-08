import ProjectCard from '../components/project-card/ProjectCard';
import musicSpiderGif from '../assets/gifs/Music-Spider.gif';
import liaBanner from '../assets/pictures/ChineseLanterns.jpg';
import cyoaBanner from '../assets/pictures/Castaway.jpg';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import comingSoon from '../assets/pictures/ComingSoon.jpg';
import learningApp from '../assets/pictures/learningApp.jpg';
import burgerLogger from '../assets/pictures/burgerLogger.jpg';

const Portfolio = () => {
    return (
        <Container>
            <CardColumns style={{ display: 'flex', flexWrap: 'wrap' }}>
                <ProjectCard src={musicSpiderGif} name='Music Spider' description='A music finding app that allows the user to search up songs by lyrics and discover cool new artists.' link='https://inesr19.github.io/Project-1/' children='Find some music'/>
                <ProjectCard src={liaBanner} name='Lia Liu Chinese' description='A website for Lia Liu Chinese built with React.' link='https://lia-liu-chinese.herokuapp.com/' children='Learn Chinese'/>
                <ProjectCard src={cyoaBanner} name='Castaway: Flight of the Phoenix' description='A choose-your-own-adventure style game that challenges the user to escape an alien planet.' link='https://cyoa-rpg.herokuapp.com/' children='Try your luck'/>
                <ProjectCard src={comingSoon} name='Coming Soon' description='My latest incredible project is coming soon.'/>
                <ProjectCard src={learningApp} name='Language Learning App' description='A mobile-first language learning app for children.' link='https://github.com/kurtp23/language-app' children='Expand your mind'/>
                <ProjectCard src={burgerLogger} name='The Burger Logger' description='A full-stack app built with Node, Express, SQL, and HandleBars.' link='https://github.com/Clatrobe00/Burger-Logger' children='Grab a burger'/>
                
            </CardColumns>    
        </Container>
    )
}

export default Portfolio;