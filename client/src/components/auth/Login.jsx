import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import ErrorNotice from "../../misc/ErrorNotice";


import { Form, FormGroup, Label, Input } from "reactstrap";

export default function Login() {
    const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
     const history = useHistory();

    //submit function
  
  const submit = async (e) => {
      try{
           e.preventDefault();
           //create data
           const loginUser = { email, password };
           //login request
           const loginRes = await axios.post(
             "http://localhost:5000/users/login",
             loginUser
           );

           setUserData({
             token: loginRes.data.token,
             user: loginRes.data.user,
           });
           localStorage.setItem("auth-token", loginRes.data.token);
           history.push("/"); // go to homepage after registering
      } catch(err) {
        err.response.data.msg && setError(err.response.data.msg);
         }
       };
     
    return (
      <div>
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}

        <h1>login</h1>
        <Form onSubmit={submit} className="form">
          <FormGroup>
            <Label htmlFor="register-email">Email</Label>
            <Input
              type="email"
              id="login-email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="login-password">Password</Label>
            <Input
              type="password"
              id="login-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input type="submit" value="Login" />
          </FormGroup>
        </Form>
      </div>
    );
}
