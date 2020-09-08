import React, { useState, useContext } from 'react'
import axios from 'axios'
import UserContext from "../../context/UserContext";
import { useHistory } from 'react-router-dom';
import ErrorNotice from '../../misc/ErrorNotice';

import {Form, FormGroup, Label, Input } from "reactstrap";

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
  const [displayNAme, setDisplayName] = useState();
  const [error, setError] = useState();
    
  const { setUserData } = useContext(UserContext);
    const history = useHistory()

    //function that submits a form
  const submit = async (e) => {
    try {
      e.preventDefault();
      //create data
      const newUser = { email, password, passwordCheck, displayNAme };
      //await register
      await axios.post(
        "http://localhost:5000/users/register",
        newUser,
      );
      //login response
      const loginRes = await axios.post("http://localhost:5000/users/login", {
        email,
        password
      });
      
      //set the userdata
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
            
      })
      //storing the token in the local storage
      localStorage.setItem("auth-token", loginRes.data.token);
      //to go to the home page after registering
      history.push('/');
    } catch (err) { //check if error exists and set the error
      err.response.data.msg && setError(err.response.data.msg);
      
    }
    }
    return (
      <div>
        <h1>Register</h1>
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}
        <Form className="form" onSubmit={submit}>
          <FormGroup>
            <Label htmlFor="register-email">Email</Label>
            <Input
              type="email"
              id="register-email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="register-password">Password</Label>
            <Input
              type="password"
              id="register-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="verify-password">Verify Password</Label>
            <Input
              type="password"
              placeholder="verify password"
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="register-display-name">DisplayNAme</Label>
            <Input
              type="text"
              id="register-display-name"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input type="submit" value="Register" />
          </FormGroup>
        </Form>
      </div>
    );
}
