import ProjectCard from '../components/project-card/ProjectCard';
import { CardDeck } from 'react-bootstrap';
import projectData from '../components/project-data/projectData';
const _ = require('lodash');

const Portfolio = () => {

    const chunks = _.chunk(projectData, 3);

    const renderCardDecks = chunks.map((chunk, index) => {
            const cards = chunk.map((project, index) => {
                return (
                    <ProjectCard key={index} src={project.src} name={project.name} description={project.description} link={project.link} repo={project.repo} button={project.button} technologies={project.technologies} />
              );
            });
            return (<CardDeck key={index}>{cards}</CardDeck>)
        });

    return (
        <div>
            {renderCardDecks}
        </div>
    )
}

export default Portfolio;