import React from "react";
import '../button/Button.css'

const SIZES = [];
const STYLES = [];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; 
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonStyle : SIZES[0]; 

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}