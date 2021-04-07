import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

const ProjectButton = (props) => {
    const checkButtonStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[1];

    const checkButtonSize = SIZES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];

    return (
        <a href={props.link} className='btnMobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={props.onClick} type={props.type} >
                {props.children}
            </button>
        </a>

    )
}

export default ProjectButton;