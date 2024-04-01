import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/home.css';

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4"; // Fixed typo in variable name
import worldImg from "../assets/images/world.png";
import ServiceList from '../services/serviceList';
import SearchBar from '../shared/SearchBar';
import Subtitle from '../shared/subtitle'; // Fixed typo in import statement
import FeaturedTourList from '../components/featured/featuredtourlist'; // Fixed typo in component name
import experienceImg from '../assets/images/experience.png';
import MasonGalleyImage from '../components/images-gallery/masongaleyimage'; // Fixed typo in component name
import Testimonial from '../components/testimonial/testimonial';
import Newsletter from '../shared/newslatter'; // Fixed typo in component name

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className='hero d-flex align-items-center'>
                  <Subtitle subtitle={"know Before You Go"} />
                  <img src={worldImg} alt='' />
                </div>
                <h1>travelling open to door creating <span className='highlight'>memories</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis nihil eos, deleniti tempore quam hic molestias modi, sapiente est repellat at accusantium totam, atque consequuntur quos! Eius, illo doloremque!</p>
              </div>
            </Col>
            <Col lg="2">
              <div className='hmbb'>
                <img className='hmb' src={heroImg} alt='' />
              </div>
            </Col>
            <Col lg="2">
              <div className='hmbb hero_video-box' >
                <video className='hmb mt-4' src={heroVideo} alt='' controls /> {/* Fixed typo in variable name */}
              </div> 
            </Col>
            <Col lg="2">
              <div className='hmbb'>
                <img className='hmb mt-5' src={heroImg02} alt='' />
              </div>
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
                what we are serve
              </h5>
              <h3 className='services__title'>
                we offer our best services
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
              <Subtitle subtitle={'Explore'}></Subtitle>
              <h2 className='featured__tour-titile'>our featured tours</h2>
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
                <Subtitle subtitle={'experience'} />
                <h2>
                  with your all experience break <br />we will serve you</h2> {/* Fixed typo in text content */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                  Minus dolore ut similique ea dolorum qui, quam ipsum sunt soluta, voluptas vitae nemo at sapiente dignissimos.
                </p>

              </div>
              <div className='counter__wrapper d-flex align-item-center gap-5'>
                <div className='counter__box'>
                  <span>2k+</span>
                  <h6>successful trip</h6> {/* Fixed typo in text content */}

                </div>
                <div className='counter__box'>
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className='counter__box'>
                  <span>2k+</span>
                  <h6>year experience</h6>

                </div>

              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt=''></img>
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
                visit our customer test Gallery
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
              <Subtitle subtitle={'fans love'}/>
              <h2 className="testimonial__title">what fans say about us</h2> {/* Fixed typo in text content */}

            </Col>
            <Col lg='12'>
              <Testimonial/>
            </Col>
          </Row>
        </Container>
      </section>

      {/* testimonial end */}
      <Newsletter/>

    </>
  );
};

export default Home;
