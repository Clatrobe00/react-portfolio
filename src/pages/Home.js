import { Container, CardColumns } from 'react-bootstrap';
import ProjectCard from '../components/project-card/ProjectCard';
import profileImage from '../assets/pictures/Profile.jpg';
import TechList from '../components/tech-list/TechList';
import Bio from '../components/bio/Bio';

const Home = () => {
    return (
        <Container>
            <CardColumns>
                <ProjectCard src={profileImage} name='Charles Latrobe' description='Full stack developer specializing in Node.js and React' link='https://github.com/Clatrobe00' children='My Github'/>
                <ProjectCard name='Technologies' description={false}>
                    <TechList />
                </ProjectCard>
                {/* <Bio /> */}
            </CardColumns>
        </Container>
    )
}

export default Home;