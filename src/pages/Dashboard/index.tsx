import React, { useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa';
import Card from '../../Components/Card';
import { getAllCards } from '../../services/Api';


interface Card {
  // Define the properties of a card
  // You can customize this based on your requirements
  id: string;
  title: string;
  url: string;
  username: string;
  password: string;
}

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cards, setCards] = useState<Array<Card>>([]);

  useEffect(() => {
      getAllCards()
      .then((response) => {
          setCards(response.data);
        })
      .catch((error) => {
          console.log(error);
        });
    }, []);

  // Function to handle search term change
  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Function to filter the cards based on the search term
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <Link to="/newCard" className="add-card-button">
          <FaPlus />
        </Link>
      </div>

      <input type="text" value={searchTerm} onChange={handleSearchTermChange} placeholder="Search" />

      <div>
        <ul>
          {filteredCards.map((card) => (
            <li key={card.id}>
              <Card
                title={card.title}
                id={card.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;