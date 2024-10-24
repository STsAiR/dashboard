// import React from 'react'

import React, { useState } from "react";

interface ButtonProps {
    text: string;
}

const Button = ({ text }: ButtonProps) => {
    const [content, setContent] = useState<string>(text);

    return (
        <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => {
                setContent(e.clientX.toString() + " " + e.clientY.toString());
            }}
        >
            {content}
        </button>
    );
};

export default Button;
