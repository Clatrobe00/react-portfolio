import Form from 'react-bootstrap/Form';
import ProjectButton from '../button/ProjectButton';

const ContactForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted!')
    }
    return (
        <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="password" placeholder="E-mail" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicName">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textArea" rows={3} type="name" placeholder="Leave a brief description of you project." />
            </Form.Group>
            <ProjectButton onClick={handleSubmit} children='submit'/>
        </Form>
    )

}

export default ContactForm;