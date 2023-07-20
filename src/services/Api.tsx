import axios from 'axios';

async function getAllCards() {
    try {
        const response = await axios.get('http://localhost:8000/password-cards');
        return response.data; // Assuming your API returns data in a JSON format
    } catch (error) {
        // Handle errors here (e.g., network error, API response error)
        console.error('Error fetching data:', error);
        return null;
    }
}

async function getCard(id: string) {
    try {
        const response = await axios.get('http://localhost:8000/password-cards/' + id);
        return response.data; // Assuming your API returns data in a JSON format
    } catch (error) {
        // Handle errors here (e.g., network error, API response error)
        console.error('Error fetching data:', error);
        return null;
    }
}

async function updateCard(card: any, id: string) {
    try {
        const response = await axios.put('http://localhost:8000/password-cards/' + id, card);
        return response.data; // Assuming your API returns data in a JSON format
    } catch (error) {
        // Handle errors here (e.g., network error, API response error)
        console.error('Error fetching data:', error);
        return null;
    }
}

async function addCard(card: any) {
    try {
        const response = await axios.post('http://localhost:8000/password-cards', card);
        return response.data; // Assuming your API returns data in a JSON format
    } catch (error) {
        // Handle errors here (e.g., network error, API response error)
        console.error('Error fetching data:', error);
        return null;
    }
}

async function deleteCard(id: string) {
    try {
        const response = await axios.delete('http://localhost:8000/password-cards/' + id);
        return response.data; // Assuming your API returns data in a JSON format
    } catch (error) {
        // Handle errors here (e.g., network error, API response error)
        console.error('Error fetching data:', error);
        return null;
    }
}

export { getAllCards, getCard, updateCard, deleteCard, addCard };