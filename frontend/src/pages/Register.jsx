import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import RegisterImg from '../assets/images/register.png';
import usericon from '../assets/images/user.png';
import '../styles/login.css';

import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const Register = () => {


  
  const [credentials, setCredentials] = useState({
    username:'undefined',
    email: 'undefined',
    password: 'undefined'
  });

    const {dispatch}=useContext(AuthContext)
    const navigate =useNavigate()

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick =async  (e) => {
    e.preventDefault();
    try{
      const res =await fetch(`${BASE_URL}/auth/register`,{
        method:`post`,
        headers:{
          'content-type':'application/json'
        },
          body:JSON.stringify(credentials),
      })
      const result=await res.json()
      if(!res.ok)alert(result.message)

      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')

    }catch(err){
        alert(err.message);
    }

  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src={RegisterImg} alt='' />
              </div>
              <div className='login_form'>
                <div className='user'>
                  <img src={usericon} alt='' />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder='username' required id='username' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder='email' required id='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='password' required id='password' onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary_btn auth_btn' type='submit'>create Account </Button>
                </Form>
                <p>already have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
