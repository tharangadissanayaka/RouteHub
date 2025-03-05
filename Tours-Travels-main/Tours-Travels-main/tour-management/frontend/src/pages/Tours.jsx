/*
import React,{useEffect,useState} from 'react';
import "../styles/tours.css"
import CommonSection from '../shared/CommonSection';

import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import { Container, Row ,Col } from 'reactstrap';

import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import {Helmet} from "react-helmet";



const Tours = () => {
    const[pageCount,setPageCount]=useState(0);
    const [page,setPage] = useState(0);

    const {data:tours,loading,error} = useFetch(`${BASE_URL}/tours?page=${page}`)
    const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`)

    useEffect(()=>{
        const pages =Math.ceil(tourCount / 8);
        setPageCount(pages);
        window.scrollTo(0,0);
    },[page,tourCount,tours]);
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Tours</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <CommonSection title={"All Packages"} />
      <section className='pb-5'>
        <Container>
            <Row>
                <SearchBar/>
            </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
            {loading && <h5 className='text-center pt-5'>Loading......</h5>}
            {error && <h5 className='text-center pt-5'>{error}</h5>}
            {
                !loading && !error && <Row>
                {
                    tours?.map(tour=>(<Col lg='4' className='mb-4' key={tour._id}>
                        <TourCard tour={tour}/>
                    </Col>
                ))}

                <Col lg='12'>
                    <div className='pagination d-flex align-items-center
                    justify-content-center mt-4 gap-3'>
                        {[...Array(pageCount).keys()].map(number=>(
                            <span key={number} onClick={()=> setPage(number)}
                            className={page===number ? 'active__page' : ''}

                            >{number+1}</span>
                        ))}
                    </div>
                </Col>
               
            </Row>
            }
        </Container>
      </section>
    </>
  );
}

export default Tours;
*/

import React, { useEffect, useState } from 'react';
import "../styles/tours.css";
import CommonSection from '../shared/CommonSection';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import { Container, Row, Col } from 'reactstrap';
import { getTours, updateTour } from '../services/api';
import { Helmet } from "react-helmet";
import { FaEdit } from "react-icons/fa"; 
import { Link } from 'react-router-dom';

const Tours = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTours();
    }, []);

    const fetchTours = async () => {
        try {
            const data = await getTours();
            console.log('Tours:', data); // Debugging log
            setTours(data);
            setLoading(false);
        } catch (err) {
            console.error('Failed to fetch tours:', err);
            setError('Failed to fetch tours');
            setLoading(false);
        }
    };
    

    const handleEdit = async (tour) => {
        const newTitle = prompt("Enter new title", tour.title);
        const newDescription = prompt("Enter new description", tour.description);
        const newPrice = prompt("Enter new price", tour.price);

        if (newTitle && newDescription && newPrice) {
            try {
                await updateTour(tour.id, {
                    title: newTitle,
                    description: newDescription,
                    price: newPrice
                });
                fetchTours(); // Refresh data
                alert("Tour updated successfully!");
            } catch (error) {
                alert("Failed to update tour.");
            }
        }
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tours</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <CommonSection title={"All Packages"} />
            <section className='pb-5'>
                <Container>
                    <Row>
                        <SearchBar />
                    </Row>
                </Container>
            </section>

            <section className='pt-0'>
                <Container>
                    {loading && <h5 className='text-center pt-5'>Loading......</h5>}
                    {error && <h5 className='text-center pt-5'>{error}</h5>}
                    <Link to = {"/add-tour"}><button>ADD</button></Link>
                    {!loading && !error &&
                        <Row>
                            {tours.map(tour => (
                                <Col lg='4' className='mb-4' key={tour.id}>
                                    <div className="tour-card-container">
                                        {/*Edit Icon */}
                                        <FaEdit className="edit-icon" onClick={() => handleEdit(tour)} />
                                        <TourCard tour={tour} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    }
                </Container>
            </section>
        </>
    );
}

export default Tours;
