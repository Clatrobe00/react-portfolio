import { Container, CardColumns } from 'react-bootstrap';
import ProjectCard from '../components/project-card/ProjectCard';
import profileImage from '../assets/pictures/Profile.jpg';
import TechList from '../components/tech-list/TechList';
import Bio from '../components/bio/Bio';
import HomeJumbo from '../components/home-jumbo/HomeJumbo';

const Home = () => {
    return (
        <Container>
            <HomeJumbo />
        </Container>
    )
}

export default Home;