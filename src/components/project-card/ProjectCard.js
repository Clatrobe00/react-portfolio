import Card from 'react-bootstrap/Card';

const ProjectCard = (props) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
        </Card.Body>
    </Card>
)

export default ProjectCard;