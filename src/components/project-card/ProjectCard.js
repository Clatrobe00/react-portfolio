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
    
    if (props.button && props.link && props.repo) {
        
        return (
 
                <Card style={{ 
                    backgroundColor: 'transparent', 
                    border: '0px', 
                    position: 'relative',
                    marginTop: '10px',
                    marginBottom: '10px' }} id='wrapper' onClick={() => set(state => !state)}>
                    <a.div className="c back" style={{ 
                        bottom: '0px', 
                        opacity: opacity.to(o => 1 - o), 
                        transform,
                        zIndex: '1' }}>
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
                            <div>
                            <ProjectButton link={props.link}>
                                {props.button}
                            </ProjectButton>
                            <ProjectButton link={props.repo} buttonStyle='btn--outline'>
                                Repo
                            </ProjectButton>
                            </div>
                        </Card>
                    </a.div>
                    <a.div className="c front" 
                        style={{ position: 'absolute',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            opacity, 
                            transform: transform.to(t => `${t} rotateX(180deg)`) }}>
                        <Card className='genCard projectCard' style={{ 
                            height: '100%', 
                            backgroundColor: 'rgba(175, 175, 175, 0.7)',
                            marginTop: '10px',
                            marginBottom: '10px' }}>
                            <Card.Img variant="top" src={props.src} />
                            <Card.Body>
                                <Card.Title>{props.name}</Card.Title>
                                <Card.Text>
                                <p style={{ fontSize: '18px' }}>Tech Used</p>
                                <ul style={{ textAlign: 'center', listStyle: 'none' }}>
                                    <li>{props.technologies[0]}</li>
                                    <li>{props.technologies[1]}</li>
                                    <li>{props.technologies[2]}</li>
                                </ul>
                                </Card.Text>
                            </Card.Body>
                            <div>
                            <ProjectButton link={props.link}>
                                {props.button}
                            </ProjectButton>
                            <ProjectButton link={props.repo} buttonStyle='btn--outline'>
                                Repo
                            </ProjectButton>
                            </div>
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
            {props.children}
            {props.link ? <ProjectButton link={props.link} className='btn-pro project-btn'>
                {props.button}
            </ProjectButton> : <div></div>}
        </Card.Body>
    </Card>
)}

export default ProjectCard;