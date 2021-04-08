import Card from 'react-bootstrap/Card';
import ProjectButton from '../button/ProjectButton';
import './ProjectCard.css';

const ProjectCard = (props) => {
    
    if (props.children && props.link) {
        return (
            <Card className='genCard projectCard'>
                <Card.Img variant="top" src={props.src} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <p>
                <ProjectButton link={props.link}>
                    {props.children}
                </ProjectButton>
                <ProjectButton link={props.repo} buttonStyle='btn--outline'>
                    Repo
                </ProjectButton>
                </p>
            </Card>
        )
    } else
    return (
    <Card className='genCard titleCard'>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.description}
                {props.children}
            </Card.Text>
        </Card.Body>
    </Card>
)}

export default ProjectCard;