import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectCard = (props) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
            <Card.Title>{props.Name}</Card.Title>
            <Card.Text>
                {props.Description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
)

export default ProjectCard;