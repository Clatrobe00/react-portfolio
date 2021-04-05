import ProjectCard from '../components/project-card/ProjectCard';
import Gif from '../assets/gifs/Music-Spider.gif';
import Container from 'react-bootstrap/Container';

const Portfolio = () => {
    return (
        <Container>
            <h1>Hello from Portfolio</h1>
            <ProjectCard src={Gif} name='Music Spider' description='A music finding app that allows the user to search up songs by lyrics and discover cool new artists.'/>
        </Container>

    )
}

export default Portfolio;