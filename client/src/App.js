import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './components/pages/Home'
import Login from './components/auth/Login';
import Register from "./components/auth/Register";
import UserContext from './context/UserContext'
import axios from 'axios'
import './style.css'

import About from './components/pages/About'

import Footer from './components/layout/Footer'

function App() {
  const [userData, setUserData] = useState({
    token: undefined,  //store jwt
    user: undefined   //store the userdata like displayname, email, pasword
  })

  //requires function and dependency list parameters //sideeffects
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token')
      if (token === null) {
        localStorage.setItem('auth-token', "")
        token = ""
      }
      const tokenRes = await axios.post(
        'http://localhost:5000/users/tokenIsValid',
        null,
        { headers: { 'x-auth-token': token } });
      
      if (tokenRes.data) {  //if user is logedin
        const userRes = await axios.get(
          "http://localhost:5000/users/",
          {
            headers: { 'x-auth-token': token },
          });
        setUserData({
          token,
          user: userRes.data,
        });
      }
      
    }
    checkLoggedIn();
    
  }, [])
  
  return (
    <div>
      <Router>
        {/* context creates states that are shared throughout the components */}
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register}/>
              <Route path = "/about" component = {About}/>
            </Switch>
          </div>
          <Footer/>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
