import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import useFetch from '../hooks/useFetch';
import SearchBar from '../shared/SearchBar';
import Commonsection from '../shared/commonsection';
import Newsletter from '../shared/newslatter'; // Fixed typo in import statement
import TourCard from '../shared/tourcard';
import '../styles/tour.css';
import { BASE_URL } from '../utils/config';

const Tour = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tour?page=${page}`);
  const { page: tourCount } = useFetch(`${BASE_URL}/tour/getTourCount`);

  useEffect(() => {
    if (tourCount > 0) {
      const calculatedPageCount = Math.ceil(tourCount / 8);
      setPageCount(calculatedPageCount);
      window.scrollTo(0, 0);
    }
  }, [tourCount]);

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };


  return (
    <>
      <Commonsection title={'All Rooms'} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading.....</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {!loading && !error && (
            <Row>
              {tours?.map(tour => (
                <Col lg='3' md='6' sm='6' className='tourr mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg='12'>
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {/* Pagination Section */}
                  {[...Array(pageCount).keys()].map(number => (
                    <span
                      key={number}
                      onClick={() => handlePageClick(number)}
                      className={page === number ? 'active__page' : ''}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tour;

