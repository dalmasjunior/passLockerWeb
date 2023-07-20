import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './index.css';
import { addCard } from "../../services/Api";

interface NewCardData {
    title: string;
    url: string;
    username: string;
    password: string;
}

const NewCard: React.FC = () => {
    const [newCardData, setNewCardData] = useState<NewCardData>({
        title: '',
        url: '',
        username: '',
        password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewCardData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        await addCard(newCardData)
        window.location.pathname = "/";
        
    };

    return (
        <div className="wrapper">
            <h1>New Card</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={newCardData.title} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="url">URL:</label>
                    <input type="text" id="url" name="url" value={newCardData.url} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={newCardData.username} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={newCardData.password} onChange={handleInputChange} />
                </div>
                <button type="submit">Create Card</button>
            </form>
            <Link to="/" className="back-button">
                Go Back
            </Link>
        </div>
    );
};

export default NewCard;
