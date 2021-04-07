import { Container, CardColumns } from 'react-bootstrap';
import ProjectCard from '../components/project-card/ProjectCard'
import profileImage from '../assets/pictures/Profile.jpg';

const Home = () => {
    return (
        <Container>
            <CardColumns>
                <ProjectCard src={profileImage} name='Charles Latrobe' description='Full stack developer specializing in Node and React' link='https://github.com/Clatrobe00' children='My Github'/>
                <ProjectCard name='Technologies' description='React.js' children={false}/>
            </CardColumns>
        </Container>
    )
}

export default Home;