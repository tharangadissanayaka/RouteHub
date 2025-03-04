import React, { useEffect, useState } from 'react';
import { getTours } from '../services/api';
import { Container, Row, Col } from 'reactstrap';
import TourCard from '../shared/TourCard';
import { Helmet } from "react-helmet";
import "./TourList.css"; 

const TourList = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTours();
    }, []);

    const fetchTours = async () => {
        try {
            const data = await getTours();
            console.log('Fetched Tours:', data);
            setTours(data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching tours:', err);
            setError('Failed to load tour details.');
            setLoading(false);
        }
    };

    const handleDelete = (id) => {
        setTours(tours.filter(tour => tour.id !== id));
    };

    return (
        <>
            <Helmet>
                <title>Tour Packages</title>
            </Helmet>

            <Container className="tour-list-container">
                <h2 className="tour-list-title">Available Tour Packages</h2>
                {loading && <h5 className="tour-list-loading">Loading...</h5>}
                {error && <h5 className="tour-list-error">{error}</h5>}
                {!loading && !error &&
                    <Row>
                        {tours.map((tour) => (
                            <Col lg="4" md="6" sm="12" key={tour.id} className="mb-4">
                                <TourCard tour={tour} onDelete={handleDelete} />
                            </Col>
                        ))}
                    </Row>
                }
            </Container>
        </>
    );
};

export default TourList;
