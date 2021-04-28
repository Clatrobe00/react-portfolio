import Card from 'react-bootstrap/Card';
import ProjectButton from '../button/ProjectButton';
import './ProjectCard.css';
import { useSpring, animated as a } from 'react-spring'
import React, { useState } from 'react'

const ProjectCard = (props) => {

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(300px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 600, friction: 80 }
    })
    
    if (props.children && props.link && props.repo) {
        
        return (
 
                <Card style={{ 
                    backgroundColor: 'transparent', 
                    border: '0px', 
                    position: 'relative',
                    marginTop: '10px',
                    marginBottom: '10px' }} id='wrapper' onClick={() => set(state => !state)}>
                    <a.div class="c back" style={{ 
                        bottom: '0px', 
                        opacity: opacity.interpolate(o => 1 - o), 
                        transform }}>
                        <Card className='genCard projectCard' style={{ backgroundColor: 'rgba(175, 175, 175, 0.7)', 
                        height: '100%',
                        marginTop: '10px',
                        marginBottom: '10px' }}>
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
                    </a.div>
                    <a.div class="c front" 
                        style={{ position: 'absolute',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            opacity, 
                            transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                        <Card className='genCard projectCard' style={{ 
                            height: '100%', 
                            backgroundColor: 'rgba(175, 175, 175, 0.7)',
                            marginTop: '10px',
                            marginBottom: '10px' }}>
                            <Card.Img variant="top" src={props.src} />
                            <Card.Body>
                                <Card.Title>{props.name}</Card.Title>
                                <Card.Text>
                                <h6>Tech Used</h6>
                                <ul style={{ textAlign: 'left' }}>
                                    <li>{props.technologies[0]}</li>
                                    <li>{props.technologies[1]}</li>
                                    <li>{props.technologies[2]}</li>
                                </ul>
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
                    </a.div>
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
            </Card.Text>
            {props.link ? <ProjectButton link={props.link}>
                {props.children}
            </ProjectButton> : <div>{props.children}</div>}
        </Card.Body>
    </Card>
)}

export default ProjectCard;