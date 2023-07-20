import React from 'react';
import './index.css';

type ButtonProps = { 
    title: string;
    page?: string; 
    customFunction?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, page, customFunction }: ButtonProps) => {
    if (page) {
        return (
            <a className='button-link' href={page}>{title}</a>
        );
    } else {
        return (
            <button onClick={customFunction}>{title}</button>
        );
    }
};

export default Button;