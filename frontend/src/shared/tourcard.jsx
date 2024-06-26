import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import calculateAvgRating from '../utils/avgRating';
import './TourCard.css';


const TourCard = ({ tour }) => {
  const { _id, city, title, photo, price, featured, reviews } = tour;
  console.log(`www`, city)

  const { totalRating, avgRating } = calculateAvgRating(reviews);



  return (
    <div className='tour__card'>
      <Card>
        <div className='tour__img'>
          <img src={photo} alt='tour-img' />
          {featured && <span>Featured</span>}
        </div>
      </Card>
      <CardBody>
        <div className='card__top d-flex align-items-center justify-content-between'>
          <span className='tour__location d-flex align-items-center gap-1'>
            <i className='ri-map-pin-line'></i>{city}
          </span>
          <span className='tour__Rating d-flex align-items-center gap-1'>
            <i className='ri-star-fill'></i>
            {avgRating === 0 ? null : avgRating}
            {reviews && reviews.length > 0 ? <span style={{ fontSize: '15px' }}>({reviews.length})</span> : <span style={{ fontSize: '15px' }}>(Notrated)</span>}
          </span>

        </div>
        <h5 className='tour__title'><Link to={`/tours/${_id}`}>{title}</Link></h5>
        <div className='card__bottom d-flex align-items-center justify-content mt-3'>
          <h5>
            ${price}<span>/Per Person</span>
          </h5>
          <button className='btn booking__btn'>
            <Link to={`/tours/${_id}`}>Book Now</Link>
          </button>
        </div>
      </CardBody>
    </div>
  );
};

export default TourCard;