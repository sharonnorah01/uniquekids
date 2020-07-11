import React, { useEffect, useContext } from 'react'
import UserContext from '../../context/UserContext'
import { useHistory } from 'react-router-dom'

export default function Home() {
    const { userData } = useContext(UserContext)
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) history.push('/')    
    });

    return (
      <div className="page">
        <p>
          <h4>welcome to uniquekids</h4>
        </p>
      </div>
    );
}
