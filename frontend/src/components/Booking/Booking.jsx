import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';
import './booking.css';

const Booking = ({ tour, avgRating }) => {
    const { price, reviews, title } = tour;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullname: '',
        phone: '',
        guestSize: '',
        bookAt: ''
    });

    const handleChange = (e) => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);
    const handleClick = async (e) => {
        e.preventDefault();
        console.log(booking);

        try {
            if (!user) {
                return alert('please sign in');
            }

            const dataObj = {
                ...booking,
                bookAt: new Date(booking?.bookAt)
            }
            const res = await fetch(`${BASE_URL}/Booking`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(dataObj)
            });

            const result = await res.json();
            if (!res.ok) {
                return alert(result.message);
            }
            navigate('/thank-you');

        } catch (err) {
            alert(err.message);
        }

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
