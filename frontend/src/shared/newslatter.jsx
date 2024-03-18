import React from 'react';
import './newslatter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
    return (
        <section className='newsletter'> 
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='newsletter__content'>
                            <h2>
                                Subscribe now to receive more interesting news about travel
                            </h2>
                            <div className='newsletter__input'>
                                <input type="email" placeholder='Enter your email' />
                                <button className='btn_newsletter'>Subscribe</button>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eligendi nihil quidem distinctio ipsa nesciunt. Ullam assumenda excepturi, tenetur, culpa magni autem molestias, odio animi architecto dolor consequatur at eaque!
                            </p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt='' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter;
