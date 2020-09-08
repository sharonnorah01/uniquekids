import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs="6" sm="4">
            <div>
              <p>
                <h3>About Unique kids</h3>
              </p>
              <p>
                Since 2020 Unique kids has been providing top-quality clothes,
                baby colections to infants, elementary, and preschool aged
                children in Uganda.
              </p>
            </div>
          </Col>
          <Col xs="6" sm="4">
            <div className="footer__contact">
              <p>
                <h3>Contact information</h3>
              </p>
              <ul>
                <li className="footer__list">+256-78755 7340</li>
                <li className="footer__list">info@uniquekids.com</li>
                <li className="footer__list">
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
              </ul>
            </div>
          </Col>
          <Col sm="4">
            <div className="footer__newsletter">
              <p>
                <h3>News letter</h3>
              </p>
              <p>
                Subscribe to our newsletter and stay on top of the latest
                collections
              </p>
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            All rights reserved @SharonNorah
          </Col>
        </Row>
      </Container>
    </div>
  );
}
