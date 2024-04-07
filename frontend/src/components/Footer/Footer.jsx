import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import logo from '../../assets/images/room.logo.png';
import './footer.css';




const Quick__links = [
  {
    path: '/home',
    display: 'HOME'
  },
  {
    path: '/about',
    display: 'ABOUT'
  },
  {
    path: '/tours',
    display: 'ROOMS'
  },
];


const Quick__links2 = [
  {
    path: '/gallery',
    display: 'GALLERY'
  },
  {
    path: '/login',
    display: 'LOGIN'
  },
  {
    path: '/register',
    display: 'REGISTER'
  },
];

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <img src={logo} alt=''></img>
              <p>Unlock your next adventure with exclusive
                travel insights and offers. Subscribe now for
                curated content and expert tips</p>
              <div className='social__links d_flex align-item-center gap-4'>
                <span>
                  <Link to='#'><i className='ri-youtube-line'></i></Link>
                </span>
                <span>
                  <Link to='#'><i className='ri-github-fill'></i></Link>
                </span>

                <span>
                  <Link to='#'><i className='ri-instagram-line'></i></Link>
                </span>


              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-links'>
              {Quick__links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>

          </Col>

          <Col lg='3'>
            <h5 className='footer__link-title'>Quick links</h5>
            <ListGroup className='footer__quick-links'>
              {Quick__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg='3'>
            <h5 className='footer__link-title'>Contacts</h5>
            <ListGroup className='footer__quick-links'>

              <ListGroupItem className='ps-0 border-0 d-flex-align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'><span>
                  <i className='ri-map-pin-line'></i>
                </span>
                  Address:
                </h6>
                <p className='b-0'>india,chandigarh </p>

              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex-align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'><span>
                  <i className='ri-mail-line'></i>
                </span>
                  email:
                </h6>
                <p className='b-0'>kdilmohan101@gmail.com </p>

              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex-align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'><span>
                  <i className='ri-phone-fill'></i>
                </span>
                  Phone:
                </h6>
                <p className='b-0'>+919218600126 </p>

              </ListGroupItem>

            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
            <p className="Copyright">Copyright{year}, design and develop by dilmoan kumar.ALL rights reserved.</p>
          </Col>


        </Row>
      </Container>

    </footer>
  )
}
export default Footer;
