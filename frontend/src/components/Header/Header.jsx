import React, { useContext, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button, Container, Row } from 'reactstrap';
import logo from '../../assets/images/room.logo.png';
import { AuthContext } from '../../context/AuthContext';

import './header.css';

const navLinks = [
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

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };
  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);
  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');


  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav_wrapper d-flex align-items-center justify-content-between'>
            {/* logo */}
            <div className='logo'>
              <img src={logo} alt="" />
            </div>
            {/* {logo} */}
            {/* {logo} */}
            <div className='navigation' ref={menuRef} onClick={toggleMenu}>
              <ul className='menu d-flex align-items-center gap-5'>
                {navLinks.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink to={item.path} activeClassName='active__link'>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* {logo} */}
            <div className='nav__right d-flex align-items-center gap-4'>
              <div className='nav__btn d-flex align-items-center gap-4'>
                {
                  user ? <>
                    <h5 className='mb-0'>{user.username}</h5>
                    <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                  </> : <>

                    <Button className='btn secondary__btn'>
                      <Link to='/login'>LOGIN</Link>
                    </Button>
                    <Button className='btn primary__btn'>
                      <Link to='/register'>REGISTER</Link>
                    </Button>
                  </>
                }

              </div>
              <span className='mobile_-menu' onClick={toggleMenu}>
                <i className='ri-menu-line'></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
