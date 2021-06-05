import { useState } from 'react'
import './Form.css';
import ProjectButton from '../button/ProjectButton';
import Axios from 'axios';

const Form = () => {

    const [formInfo, setFormInfo] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormInfo({...formInfo, [e.target.id]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            await Axios.post(
                '/.netlify/functions/sendgrid',
                { message:  '<br>' + 'Name: ' + formInfo.name + '<br>' + 'Email: ' + formInfo.email + '<br>' + 'Message: ' + formInfo.message + '<br>' + 'Message End' }
            )
        }
        catch(e) {
            console.error(e);
            alert('Your message could not be sent.')
        }
        console.log('submitting: ', formInfo);
    }

    return (
        <div className='form-container'>
            <form action="/my-handling-form-page" method="post">
                <ul className='form-list'>
                <li>
                    <label for="name">Name:</label>
                    <input type="text" onChange={handleChange} id="name" value={formInfo.name}/>
                </li>
                <li>
                    <label for="mail">E-mail:</label>
                    <input type="text" onChange={handleChange} id="email" value={formInfo.email} />
                </li>
                <li>
                    <label for="msg">Message:</label>
                    <textarea id="message" onChange={handleChange} value={formInfo.message}></textarea>
                </li>
                </ul>
                <ProjectButton children='Submit' onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default Form;