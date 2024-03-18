import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Form, FormGroup } from 'reactstrap';
import { BASE_URL } from '../utils/config';
import './search-bar.css';

const SearchBar = () => {
    const locationRef = useRef('');
    const DistanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate()

    const SearchHandler = async () => {
        const location = locationRef.current.value;
        const Distance = DistanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if (location === '' || Distance === '' || maxGroupSize === '') {
            return alert('All fields are required');
        }

        const res = await fetch(`${BASE_URL}/tour/BySearch?city=${location}&distance=${Distance}&maxGroupSize=${maxGroupSize}`)
        if (!res.ok) alert('something went wrong')
        const result = await res.json()

    console.log(`Distance`,Distance)
console.log(`city`,location)
        navigate(`/tour/search?city=${location}&Distance=${Distance}&maxGroupSize=${maxGroupSize}`,{ state: result.data })
    };

    return (
        <Col lg='12'>
            <div className='search-bar'>
                <Form className='d-flex align-items-center gap4'>
                    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span><i className='ri-map-pin-line'></i></span>
                        <div>
                            <h6>Location</h6>
                            <input type='text' placeholder='come here' ref={locationRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span><i className='ri-map-pin-time-line'></i></span>
                        <div>
                            <h6>Distance</h6>
                            <input type='number' placeholder='Distance k/m' ref={DistanceRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span><i className='ri-group-line'></i></span>
                        <div>
                            <h6>Max People</h6>
                            <input type='number' placeholder='0' ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                    <span className='search__icon' type='submit' onClick={SearchHandler}><i className='ri-search-line'></i></span>
                </Form>
            </div>
        </Col>
    );
};

export default SearchBar;
