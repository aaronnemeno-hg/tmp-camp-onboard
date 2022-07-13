import React, { useEffect, useState } from 'react';
import { Button, InputGroup, Form, FormControl, Card, Alert } from "react-bootstrap";
//import LoginForm from '../../components/login/LoginOption';

import ClientLogo from '../../assets/elc-logo.png';
import './login.css';

import { useLoginUserMutation } from "../../services/authentication";
import LoginErrorModal from '../../components/login/LoginErrorModal';

const Login = () => {
  //console.log(ClientLogo);
  const [loginUser, {data, isError, error}] = useLoginUserMutation();
  const [usernameVal, setUsernameVal] = useState();
  const [passwordVal, setPasswordVal] = useState();

  const handleUsernameChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setUsernameVal(e.target.value);
  }

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setPasswordVal(e.target.value);
  }

  const handleFormLogin = (e) => {
    console.log("BADEH");
    var body = {
      username: usernameVal,
      password: passwordVal
    };
    console.log(body);
    
    const doLogin = loginUser(body);
    doLogin.then((response) => {
      let data = response.data;
      console.log("LOGIN FORM RESPONSE DATA");
      console.log(data);

    }).catch((error) => {
      console.log("LOGIN FORM ERROR");
      console.log(error);
    });
  }

  return (
    <React.Fragment>
      <div className="login">
        <div className="login__header">
          <div className="login__logo">
            <img className="login__logo-img" src={ClientLogo} alt="company logo" />
          </div>
          <h3 className="login__welcome">
            <span>Welcome to Campaign Audience</span>
            <span>Management Platform</span>
          </h3>
        </div>
        <div className="login__form-container">
          <div className="login__card">
            <div className="login__card-header">
              <h4>CAMP Account Login</h4> 
            </div>
            <div className="login__card-body">
              <div className="login__social-media">
                <div className="login__microsoft"></div>
                <div className="login__google"></div>
              </div>
              <div className="login__divider">
                <div className="login__left-line"></div>
                <span>OR</span>
                <div className="login__right-line"></div>
              </div>
              <Form>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="username"
                    name="username"
                    type="text"
                    onChange={(e) => setUsernameVal(e.target.value)}
                  />                  
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="*****"
                      aria-label="Password"
                      aria-describedby="password"
                      name="password"
                      onChange={(e) => setPasswordVal(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>
                <Button 
                  variant="primary"
                  className="w-100 mb-3"
                  onClick={handleFormLogin}
                >
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <LoginErrorModal show={false} title="There was an error!">
        <p><span>Check your information</span><span> or contact support</span></p>
      </LoginErrorModal>
    </React.Fragment>
  );
}

export default Login;