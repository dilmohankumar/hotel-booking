import React from 'react';
import { Col } from 'reactstrap';
import useFetch from '../../hooks/useFetch';
import TourCard from '../../shared/tourcard';
import { BASE_URL } from '../../utils/config';

function FeaturedTourList() {
    const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tour/getFeaturedTour`);

    

    // Loading indicator
    if (!loading && !error && !featuredTours) {
        return <h4>Loading.......</h4>;
    }
    

    // Error message display
    if (error) {
        return <h4>{error}</h4>;
    }

    // Render the tours if no loading or error
    return (
        <>
            {!loading && featuredTours.map(tour => (
                <Col lg='3' md='6' sm='6' className='mb-5' key={tour._id}>
                    <TourCard tour={tour} />
                </Col>
            ))}
        </>
    );
}

export default FeaturedTourList;
