import { useState } from 'react'
import './Form.css';
import ProjectButton from '../button/ProjectButton';
import Axios from 'axios';
import handleValidation from '../../utils/handleValidation';

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
        const valRes = handleValidation(formInfo);
        const errors = Object.values(valRes.errors);

        if (valRes.valid) {

            try {
    
                await Axios.post(
                    '/.netlify/functions/sendgrid',
                    { message:  '<br>' + 'Name: ' + formInfo.name + '<br>' + 'Email: ' + formInfo.email + '<br>' + 'Message: ' + formInfo.message + '<br>' + 'Message End' }
                )
                alert('Message Sent');
                window.location.reload();
            }
            catch(e) {
                console.error(e);
                alert('Your message could not be sent.');
            }
        }
        else {
            alert(errors[0]);
        }
    }

    return (
        <div className='form-container'>
            <form action="/my-handling-form-page" method="post">
                <ul className='form-list'>
                    <li>
                        <label className="label" for="name">Name:</label>
                        <input className="input" maxlength="30" type="text" onChange={handleChange} id="name" value={formInfo.name}/>
                    </li>
                    <li>
                        <label className="label" for="mail">E-mail:</label>
                        <input className="input" maxlength="30" type="text" onChange={handleChange} id="email" value={formInfo.email} />
                    </li>
                    <li>
                        <label className="label" for="msg">Message:</label>
                        <textarea className="input" rows='5' maxlength="500" id="message" onChange={handleChange} value={formInfo.message}></textarea>
                    </li>
                </ul>
                <ProjectButton children='Submit' onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default Form;