import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/home.css';

import experienceImg from '../assets/images/experience.mp4';
import heroVideo from "../assets/images/hero-video.mp4"; // Fixed typo in variable name
import worldImg from "../assets/images/world.png";
import FeaturedTourList from '../components/featured/featuredtourlist'; // Fixed typo in component name
import MasonGalleyImage from '../components/images-gallery/masongaleyimage'; // Fixed typo in component name
import Testimonial from '../components/testimonial/testimonial';
import ServiceList from '../services/serviceList';
import SearchBar from '../shared/SearchBar';
import Newsletter from '../shared/newslatter'; // Fixed typo in component name
import Subtitle from '../shared/subtitle'; // Fixed typo in import statement

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className='hero d-flex align-items-center'>
                  <Subtitle subtitle={"Get Informed Before You Begin"} />
                  <img src={worldImg} alt='' />
                </div>
                <h1>Transform Your Room Booking with Ease <br></br><br /><span className='highlight'>  OnestCoder</span></h1>
                <p>Book your ideal room effortlessly on our user-friendly website, ensuring a seamless and enjoyable experience</p>
              </div>
            </Col>
            <Col lg="2">
              
            </Col>
            <Col lg="2">
              <div className='hmbb hero_video-box' >
                <video className='hmb mt-4' src={heroVideo} alt='' autoPlay loop muted /> {/* Fixed typo in variable name and added autoplay attribute and muted for auto play */}
              </div>
            </Col>
            <Col lg="2">
             
            </Col>
          </Row>
        </Container>
        <SearchBar />
      </section>
      {/* ----- */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>
                What We Are Serve
              </h5>
              <h3 className='services__title'>
              Delivering top professional services
              </h3>

            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'VISIT'}></Subtitle>
              <h2 className='featured__tour-titile'>Featured Rooms</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* experienced */}

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='experience__content'>
                <Subtitle subtitle={'Experience'} />
                <h2>
                Book with us and experience the pinnacle of service. <br />We will serve you</h2> {/* Fixed typo in text content */}
                <p>
                Allow us to cater to your every need and enhance your booking experience with personalized service and attention to detail
                </p>

              </div>
              <div className='counter__wrapper d-flex align-item-center gap-5'>
                <div className='counter__box'>
                  <span>1k++</span>
                  <h6>Successful Booking</h6> {/* Fixed typo in text content */}

                </div>
                <div className='counter__box'>
                  <span>1k++</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className='counter__box'>
                  <span>1k++</span>
                  <h6>Review solved</h6>

                </div>

              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <div className="video-frame">
                  <video  autoPlay muted loop style={{ width: '100%', borderRadius: '10px' }}>
                    <source src={experienceImg} type="video/mp4" />
                  </video>
                </div>
              </div>
            </Col>

          </Row>

        </Container>
      </section>
      {/* end experienced */}
      {/* gallery section start*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery__title'>
                Visit our customer  Gallery
              </h2>

            </Col>
            <Col lg='12'>
              <MasonGalleyImage />
            </Col>

          </Row>

        </Container>

      </section>

      {/* gallery section end */}
      {/* testimonial start */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Customer Likes'} />
              <h2 className="testimonial__title">What Customer say about us</h2> {/* Fixed typo in text content */}

            </Col>
            <Col lg='12'>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      {/* testimonial end */}
      <Newsletter />

    </>
  );
};

export default Home;

