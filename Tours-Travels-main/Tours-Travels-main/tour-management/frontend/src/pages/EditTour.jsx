import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTourById, updateTour } from '../services/api';
import { Container, Button, Input, Label, Form, FormGroup } from 'reactstrap';
import { Helmet } from "react-helmet";
import "./EditTour.css"; 

const EditTour = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState({ title: '', description: '', price: '' });

    useEffect(() => {
        fetchTour();
    }, []);

    const fetchTour = async () => {
        try {
            const data = await getTourById(id);
            setTour(data);
        } catch (error) {
            console.error("Error fetching tour:", error);
        }
    };

    const handleChange = (e) => {
        setTour({ ...tour, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateTour(id, tour);
            alert("Tour updated successfully!");
            navigate("/tours"); // ✅ Redirect to tours page
        } catch (error) {
            console.error("Error updating tour:", error);
        }
    };

    return (
        <Container className="edit-tour-container">
            <Helmet>
                <title>Edit Tour</title>
            </Helmet>
            <h2>Edit Tour</h2>
            <Form onSubmit={handleUpdate}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input type="text" name="title" value={tour.title} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label>Description</Label>
                    <Input type="textarea" name="description" value={tour.description} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label>Price</Label>
                    <Input type="number" name="price" value={tour.price} onChange={handleChange} required />
                </FormGroup>
                <Button type="submit" className="update-button">Update Tour</Button>
            </Form>
        </Container>
    );
};

export default EditTour;
