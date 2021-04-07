import Card from 'react-bootstrap/Card';
import ProjectButton from '../button/ProjectButton';

const ProjectCard = (props) => {
    
    if (props.children && props.link) {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.src} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <ProjectButton link={props.link}>
                    {props.children}
                </ProjectButton>
            </Card>
        )
    } else
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
        </Card.Body>
    </Card>
)}

export default ProjectCard;