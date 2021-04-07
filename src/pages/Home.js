import Container from 'react-bootstrap/Container';
import ProjectCard from '../components/project-card/ProjectCard'
import profileImage from '../assets/pictures/Profile.jpg';

const Home = () => {
    return (
        <Container>
            <ProjectCard src={profileImage} name='Charles Latrobe' description='Full stack developer specializing in Node and React' link='https://github.com/Clatrobe00' children='My Github'/>
        </Container>
    )
}

export default Home;