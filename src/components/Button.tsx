// import React from 'react'

interface ButtonProps {
    text: string;
}

const Button = ({ text }: ButtonProps) => {
    return (
        <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => {
                console.log(e.clientX, e.clientY);
            }}
        >
            {text}
        </button>
    );
};

export default Button;
