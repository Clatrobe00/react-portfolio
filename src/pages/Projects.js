import ProjectCard from '../components/project-card/ProjectCard';
import musicSpiderGif from '../assets/gifs/Music-Spider.gif';
import liaBanner from '../assets/pictures/ChineseLanterns.jpg';
import cyoaBanner from '../assets/pictures/Castaway.jpg';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import comingSoon from '../assets/pictures/ComingSoon.jpg';

const Portfolio = () => {
    return (
        <Container>
            <CardColumns>
                <ProjectCard src={musicSpiderGif} name='Music Spider' description='A music finding app that allows the user to search up songs by lyrics and discover cool new artists.' link='https://inesr19.github.io/Project-1/' children='Find some music'/>
                <ProjectCard src={liaBanner} name='Lia Liu Chinese' description='A website for Lia Liu Chinese built with React.' link='https://lia-liu-chinese.herokuapp.com/' children='Learn Chinese'/>
                <ProjectCard src={cyoaBanner} name='Castaway: Flight of the Phoenix' description='A choose-your-own-adventure style game that challenges the user to escape an alien planet.' link='https://cyoa-rpg.herokuapp.com/' children='Try your luck'/>
                <ProjectCard src={comingSoon} name='Coming Soon' description='My latest incredible project is coming soon.'/>
            </CardColumns>    
        </Container>

    )
}

export default Portfolio;