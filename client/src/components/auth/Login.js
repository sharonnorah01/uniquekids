import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import ErrorNotice from "../../misc/ErrorNotice";

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
      <div className="page">
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}
        <h1>login</h1>
        <form className="form" onSubmit={submit}>
          <label htmlFor="register-email">Email</label>
          <input
            type="email"
            id="login-email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="Login" />
        </form>
      </div>
    );
}
