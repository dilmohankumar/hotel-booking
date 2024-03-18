import React from 'react'
import './sommon-section.css';
import { Container, Row, Col } from 'reactstrap';

const commonsection = ({ title }) => {
    return (
        <section className='common_section'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default commonsection