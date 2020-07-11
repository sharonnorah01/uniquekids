import React, { useState, useContext } from 'react'
import axios from 'axios'
import UserContext from "../../context/UserContext";
import { useHistory } from 'react-router-dom';
import ErrorNotice from '../../misc/ErrorNotice';

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
      <div className="page">
        <h1>Register</h1>
        {error && (<ErrorNotice message={error} clearError={()=>setError(undefined)}/>)}
        <form className ="form" onSubmit={submit}>
          <label htmlFor="register-email">Email</label>
          <input
            type="email"
            id="register-email"
            onChange={(e) => setEmail(e.target.value)}
                />
                
          <label htmlFor="register-password">Password</label>
          <input
            type="password"
            id="register-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="verify password"
            onChange={(e) => setPasswordCheck(e.target.value)}
          />

          <label htmlFor="register-display-name">DisplayNAme</label>
          <input
            type="text"
            id="register-display-name"
            onChange={(e) => setDisplayName(e.target.value)}
                />
                
          <input type="submit" value="Register" />
        </form>
      </div>
    );
}
