import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Form, ListGroup, Row } from 'reactstrap';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import { AuthContext } from '../context/AuthContext';
import useFetch from '../hooks/useFetch';
import Newsletter from '../shared/newslatter'; // Fixed typo in import statement
import "../styles/tour-details.css";
import calculateavgRating from '../utils/avgRating';
import { BASE_URL } from '../utils/config'; // Fixed quotes

const TourDetails = () => {
  const { id } = useParams();
  const reviewmsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  // Fetching data for the specific tour
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tour/${id}`);

  // Destructuring tour data if available
  const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour || {};

  const { totalRating, avgRating } = calculateavgRating(reviews);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewtext = reviewmsgRef.current.value;

    try {
      if (!user) {
        alert('Please sign in');
        return;
      }

      const reviewObj = {
        username: user?.username,
        reviewText:reviewtext,
        rating: tourRating
      };

      const res = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj)
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message)
      
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading........</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  {photo && <img src={photo} alt='' />}
                  <div className="tour__info">
                    <h2>{title}</h2>
                    <div className='d-flex align-items-center gap-5'>
                      <span className='tour__Rating d-flex align-items-center gap-1'>
                        <i className='ri-star-fill' style={{ color: 'var(--secondary-color)' }} />
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? 'Not rated' : <span>({reviews?.length})</span>}
                      </span>
                      <span>
                        <i className='ri-map-pin-user-fill'></i>{address}
                      </span>
                    </div>
                    <div className="extra_tour_details">
                      <span><i className='ri-map-pin-2-line'></i>{city}</span>
                      <span>
                        <i className='ri-money-dollar-circle-line'></i>${price}/Person
                      </span>
                      <span>
                        <i className='ri-map-pin-time-line'></i>{distance} k/m
                      </span>
                      <span><i className='ri-group-line'></i>{maxGroupSize} People</span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>
                  {/* tour review  */}
                  <div className="tour__reviews mt-4">
                    <h4>
                      Reviews({reviews?.length} Reviews)
                    </h4>
                    <Form onSubmit={submitHandler}>
                      <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                        {[...Array(5)].map((_, index) => (
                          <span key={index} onClick={() => setTourRating(index + 1)}>
                            {index + 1}<i className='ri-star-s-fill'></i>
                          </span>
                        ))}
                      </div>
                      <div className='review__input'>
                        <input type="text" ref={reviewmsgRef} placeholder='Share your thoughts' required />
                        <button className="btn primary__btn text-white" type='submit'>
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className='user__reviews'>
                      {reviews?.map((review, index) => (
                        <div className='review__item' key={index}>
                          <img src={avatar} alt='' />
                          <div className="w-100">
                            <div className='d-flex align-items-center justify-content-between'>
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date(review.date).toLocaleDateString('en-us', options)}
                                </p>
                              </div>
                              <span className='d-flex align-items-center'>
                                {review.rating} <i className='ri-star-s-fill'></i>
                              </span>
                            </div>
                            <h6>{review.reviewtext}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                  {/* end section  */}
                </div>
              </Col>
              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter /> {/* Fixed typo in component name */}
    </>
  );
};

export default TourDetails;
