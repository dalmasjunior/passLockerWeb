import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { deleteCard, getCard, updateCard } from '../../services/Api';
import toast from 'react-hot-toast';
import Clipboard from 'clipboard';

interface Card {
  id: string;
  title: string;
  url: string;
  username: string;
  password: string;
}

const CardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [card, setCard] = useState<Card>({
    id: id ? id : '',
    title: '',
    url: '',
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);


  useEffect(() => {
    getCard(id ? id : '')
    .then((response) => {
        setCard(response.data);
      })
    .catch((error) => {
        console.log(error);
      });
  }, []);

  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleDelete = async () => {
    await deleteCard(card.id);
    window.location.pathname = "/";
  };

  const handleSave = async () => {
    setIsEditMode(false);
    // Save the updated card details to the backend or update the local data source
    // For simplicity, we'll just log the updated card here
    await updateCard(card, card.id)
    toast.success('Card updated!');
  };

  const copyToClipboard = () => {
    const passwordInput = document.getElementsByName("password")[0] as HTMLInputElement;
    const clipboard = new Clipboard('.copy-button', {
      text: () => passwordInput.value,
    });
  
    clipboard.on('success', (e) => {
      toast.success('Password copied to clipboard!');
      clipboard.destroy();
    });
  
    clipboard.on('error', (e) => {
      toast.error("Failed to copy password to clipboard.");
      clipboard.destroy();
    });
  };

  const handleCopyPassword = () => {
    copyToClipboard();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCard((prevCard) => ({ ...prevCard, [name]: value }));
  };

  return (
    <div className="card-detail-container">
      <h1>Card Detail</h1>
      <div className="card-detail">
          <>
            
            <p>
              Title: <span><input type="text" name="title" value={card.title} onChange={handleChange} disabled={!isEditMode} /></span>
            </p>
            <p>
              URL: <span><input type="text" name="url" value={card.url} onChange={handleChange} disabled={!isEditMode}/></span>
            </p>
            <p>
              Username: <span><input type="text" name="username" value={card.username} onChange={handleChange} disabled={!isEditMode}/></span>
            </p>
            <p>
              Password:
              <input type={showPassword ? "text" : "password"} name="password" value={card.password} onChange={handleChange} disabled={!isEditMode}/>
              <button onClick={togglePasswordVisibility}>Show/Hide Password</button>
              <button onClick={handleCopyPassword} className='copy-button'>Copy Password</button>
            </p>
            {isEditMode ? (
              <button onClick={handleSave}>Save</button>
            ): (
              <>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
              </>
            )

            }
          </>
      </div>
      <Link to="/" className="back-button">
        Go Back
      </Link>
    </div>
  );
};

export default CardDetail;
