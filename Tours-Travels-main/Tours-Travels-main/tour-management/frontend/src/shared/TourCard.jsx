import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { FaMapMarkerAlt, FaDollarSign, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { deleteTour } from '../services/api';
import "./TourCard.css"; // Import CSS



  const TourCard = ({ tour, onDelete }) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit-tour/${tour.id}`); 
    };

    const handleDelete = async () => {
      if (window.confirm("Are you sure you want to delete this tour?")) {
          try {
              await deleteTour(tour.id);
              onDelete(tour.id); 
              alert("Tour deleted successfully!");
          } catch (error) {
              console.error("Error deleting tour:", error);
            //   alert("Failed to delete tour!");
          }
      }
    };


    return (
      <Card className="tour-card">
          <CardBody>
              <CardTitle tag="h5">{tour.title}</CardTitle>
              <CardText>{tour.description}</CardText>
              <div className="icon-text">
                  <FaMapMarkerAlt className="icon" /> <span>Location: Unknown</span>
              </div>
              <div className="icon-text">
                  <FaDollarSign className="icon" /> <span>Price: ${tour.price}</span>
              </div>

              <FaEdit className="edit-icon" onClick={handleEdit} /> 
              <FaTrash className="delete-icon" onClick={handleDelete} />
          </CardBody>
      </Card>
  );
};

export default TourCard;
