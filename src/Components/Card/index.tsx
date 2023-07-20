import React, { MouseEventHandler } from 'react';
import './index.css';

interface CardProps {
    title: string;
    id: string;
}

const Card: React.FC<CardProps> = ({ title, id }) => {
    return (
        <a className="card-link" href={`/card/${id}`}>
            <div className="card">
                <span style={{ textAlign: 'center' }}>{title}</span>
            </div>
        </a>
    );
};

export default Card;
