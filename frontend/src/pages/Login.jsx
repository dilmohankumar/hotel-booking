import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import loginImg from '../assets/images/login.png';
import usericon from '../assets/images/user.png';
import { AuthContext } from '../context/AuthContext';
import '../styles/login.css';
import { BASE_URL } from '../utils/config';



const Login = () => {


  
 const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});

  const {dispatch}=useContext(AuthContext)
  const navigate =useNavigate()


  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick =async (e) => {
    e.preventDefault();
    dispatch({type:'LOGIN_START'})
    try{
        const res=await fetch(`${BASE_URL}/auth/login`,{
          method:`post`,
          headers:{
            'content-type':'application/json'
          },
          credentials:'include',
            body:JSON.stringify(credentials),
        })

          const result=await res.json()
          if(!res.ok)alert(result.message);
          console.log(result.data);


          dispatch({type:'LOGIN_SUCCESS',payload:result.data});
          navigate('/');


    }catch(err){
        dispatch({type:'LOGIN_FAILURE',payload:err.message});
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src={loginImg} alt='' />
              </div>
              <div className='login_form'>
                <div className='user'>
                  <img src={usericon} alt='' />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder='email' required id='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='password' required id='password' onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary_btn auth_btn' type='submit'>Login</Button>
                </Form>
                <p>Don't have an account? <Link to='/Register'>Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
