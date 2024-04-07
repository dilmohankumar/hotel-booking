import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.mp4';
import './newslatter.css';

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='newsletter__content'>
                            <h2>
                            Subscribe now to receive captivating updates and exclusive news about travel experiences
                            </h2>
                            <div className='newsletter__input'>
                                <input type="email" placeholder='Enter your email' />
                                <button className='btn_newsletter'>Subscribe</button>
                            </div>
                            <p>
                            In our ever-evolving world of travel, staying informed and up-to-date is key to unlocking unforgettable experiences. By subscribing to our newsletter, you'll gain access to a wealth of curated content, insider tips, and exclusive offers tailored to enhance your journey. From inspiring destination highlights to expert travel advice, our newsletters are designed to keep you informed and inspired, ensuring every trip is nothing short of extraordinary. Join our community of avid travelers today and embark on a journey of endless discovery. Subscribe now and let the adventures begin.
                            </p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                          
                            <video autoPlay loop muted>
                                <source src={maleTourist} type="video/mp4" />
                              
                            </video>
                           </div>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter;
