import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--small', 'btn--large'];

const ProjectButton = (props) => {
    const checkButtonStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];

    return (
        <a href={props.link} rel='noreferrer' buttonSize={props.buttonSize} buttonStyle={props.buttonStyle} target='_blank' className='btnMobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={props.onClick} type={props.type} >
                {props.children}
            </button>
        </a>

    )
}

export default ProjectButton;