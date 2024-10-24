// import React from 'react'

// import { useState } from "react";

interface ButtonProps {
    children: string;
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark";
    onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
    // const [content, setContent] = useState<string>(children);

    return (
        <button type="button" className={"btn btn-" + color} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
