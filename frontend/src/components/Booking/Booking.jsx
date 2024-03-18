import React, { useState } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour;
    const navigate=useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'kdilmohan101@gmail.com',
        fullname: '',
        phone: '',
        guestSize: '',
        bookAt: ''
    });

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);
    const handleClick = e => {
        e.preventDefault();
       
        navigate('/thank-you');

    };

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>${price}<span>/per person</span></h3>
                <span className='tour__Rating d-flex align-items-center gap-1'>
                    <i className='ri-star-fill' />
                    {avgRating === 0 ? null : avgRating}({reviews?.length})
                </span>
            </div>
            {/* ................... */}
            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder='full name' id='fullname' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="tel" placeholder='phone' id='phone' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='' id='bookAt' required onChange={handleChange} />
                        <input type="number" placeholder='guest' id='guestSize' required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>
            {/* ........... */}
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>
                            ${price} <i className='ri-close-line'></i> 1 person</h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>service charge</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className='total border-0 px-0'>
                        <h5>total</h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>
                    Book Now
                </Button>
            </div>
        </div>
    );
};
export default Booking;
