import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

const Button = (props) => {
    const checkButtonStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];

    return (
        <Link to={props.link} className='btnMobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={props.onClick} type={props.type} >
                {props.children}
            </button>
        </Link>
    )
}

export default Button;