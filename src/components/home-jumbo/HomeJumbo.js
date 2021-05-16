import { Jumbotron, Container, Row, Col} from 'react-bootstrap';
import "./HomeJumbo.css";
import ProjectCard from '../project-card/ProjectCard';
import profileImage from '../../assets/pictures/Profile.jpg';
import TechList from '../tech-list/TechList';
import Bio from '../bio/Bio'

const HomeJumbo = () => {
    return (
        <Jumbotron className="HomeJumbo">
            <Container>
                <Row>
                    <Col sm={{ order: '2'}}>
                        <ProjectCard src={profileImage} name='Charles Latrobe' description='Full stack developer specializing in Node.js and React' link='https://github.com/Clatrobe00' button='My Github'/>
                    </Col>
                    <Col sm={{ order: '1'}}>
                        <ProjectCard name='About' description={false}>
                            <Bio />
                        </ProjectCard>
                    </Col>
                    <Col sm={{ order: '3'}}>
                        <ProjectCard name='Technological Proficiencies' description={false} link='https://github.com/Clatrobe00/hike-tracker' button='Currently: Honing My React Skills'>
                            <TechList />
                        </ProjectCard>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default HomeJumbo;