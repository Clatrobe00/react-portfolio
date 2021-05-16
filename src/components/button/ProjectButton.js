import React from 'react';
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline'];

const ProjectButton = (props) => {
    const checkButtonStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[0];

    return (
        <a href={props.link} rel='noreferrer' buttonStyle={props.buttonStyle} target='_blank' className='btnMobile'>
            <button className={`btn ${checkButtonStyle}`} onClick={props.onClick} type={props.type} >
                {props.children}
            </button>
        </a>

    )
}

export default ProjectButton;