import React from 'react'

export default function Footer() {
    return (
      <div className="footer">
        <div>
          <p><h3>About Unique kids</h3></p>
          <p>
            Since 2020 Unique kids has been providing top-quality clothes, baby
            colections to infants, elementary, and preschool aged children in
            Uganda.
          </p>
        </div>
        <div>
          <p>
            <h3>Contact information</h3>
          </p>
          <ul>
            <li>+256-78755 7340</li>
            <li>info@uk.com</li>
          </ul>
        </div>
        <div>
          <p>
            <h3>News letter</h3>
          </p>
          <p>
            Subscribe to our newsletter and stay on top of the latest collections
          </p>
          <input type ="text" placeholder="Enter your email"/>
          <br/>
          <button>Subscribe</button>
        </div>
      </div>
    );
}
