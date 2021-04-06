import Container from 'react-bootstrap/Container';
import ProjectCard from '../components/project-card/ProjectCard'
import profileImage from '../assets/pictures/Profile.jpg';

const Home = () => {
    return (
        <Container>
            <ProjectCard src={profileImage} name='Charles Latrobe' description='Full stack developer specializing in Node and React'/>
        </Container>
    )
}

export default Home;