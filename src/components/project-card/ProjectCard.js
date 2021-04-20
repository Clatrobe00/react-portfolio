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
    
    if (props.children && props.link) {
        return (
            <div className='templateContainer'>
                <div onClick={() => set(state => !state)}>
                    <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
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
                    </a.div>
                    <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
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
                    </a.div>
                </div>
            </div>    
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