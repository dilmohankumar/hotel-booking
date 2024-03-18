import React from 'react'
import { Col, Row, Container, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/thank-you.css';

const thankyou = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='12' className='pt-5 text-center'>
                    <div className="thank_you">
                    <span><i className='ri-checkbox-circle-line'></i></span>
                    <h1 className='mb-3 fw-semibold'>thank you</h1>
                    <h3 className='mb-5'>your tour is booked.</h3>
                    <Button className='btn primary_btn w-25'>
                        <Link to='/home'>Back to home</Link>
                    </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default thankyou;