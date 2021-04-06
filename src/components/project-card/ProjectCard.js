import Card from 'react-bootstrap/Card';
import Button from '../button/Button';

const ProjectCard = (props) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
        </Card.Body>
        <Button link={props.link} onClick={props.onClick} >
            {props.children}
        </Button>
    </Card>
)

export default ProjectCard;