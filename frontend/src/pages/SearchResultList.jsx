import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import CommonSection from './../shared/commonsection';
import Newsletter from "./../shared/newslatter";
import TourCard from './../shared/tourcard';

const SearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state);
  console.log(data);

  return (
    <>
      <CommonSection title={'tour search result'} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? <h4 className='text-center'>no tour found</h4> : data?.map(tour => (
              <Col lg='3' className='mb-4' key={tour._id}>
                <TourCard tour={tour} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Newsletter />

    </>


  )
};

export default SearchResultList;
