import React, { useState } from 'react';
import { addTour } from '../services/api'; // Import API function
import './AddTour.css';

const AddTour = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addTour({ title, description, price });
      alert('Tour added successfully!');
      setTitle('');
      setDescription('');
      setPrice('');
    } catch (error) {
      alert('Failed to add tour.');
    }
  };

  return (
    <div className="add-tour-container">
      <h2>Add a New Tour</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

        <button type="submit">Add Tour</button>
      </form>
    </div>
  );
};

export default AddTour;
