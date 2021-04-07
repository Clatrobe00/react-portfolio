import Jumbotron from 'react-bootstrap/Jumbotron';
import ProjectButton from '../button/ProjectButton';

const ContactJumbo = () => {


    return (
        <Jumbotron style={{ opacity: '50%' }}>
        <h1>Interested in working with me?</h1>
        <p>
            Click any of the links below to find me on GitHub or LinkedIn, or just contact me directly at my email.
        </p>
        <p>
            <ProjectButton link='https://www.linkedin.com/in/charles-latrobe-bateman-6b748a1b6/' children="LinkedIn" />
            <ProjectButton link='https://github.com/Clatrobe00' children="GitHub" />
        </p>
        <p>
            <ProjectButton link='mailto:charlie.bateman117@gmail.com?subject=Subject&body=You%20are%20hired!' children='Charlie.Bateman117@gmail.com'/>
        </p>
        </Jumbotron>
    )
//This form will have to be removed an replaced with more succinct/secure contact info.
}

export default ContactJumbo;