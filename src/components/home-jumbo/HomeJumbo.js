import { Jumbotron, Container, Row, Col} from 'react-bootstrap';
import "./HomeJumbo.css";
import ProjectCard from '../project-card/ProjectCard';
import profileImage from '../../assets/pictures/Profile.jpg';
import TechList from '../tech-list/TechList';

const HomeJumbo = () => {
    return (
        <Jumbotron className="HomeJumbo">
            <Container>
                <Row>
                    <Col sm={{ order: '2'}}>
                        <ProjectCard src={profileImage} name='Charles Latrobe' description='Full stack developer specializing in Node.js and React' link='https://github.com/Clatrobe00' children='My Github'/>
                    </Col>
                    <Col sm={{ order: '1'}}>
                    </Col>
                    <Col sm={{ order: '3'}}>
                        <ProjectCard name='Technologies' description={false}>
                            <TechList />
                        </ProjectCard>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default HomeJumbo;