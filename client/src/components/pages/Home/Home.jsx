import React, { useEffect, useContext } from 'react'
import UserContext from '../../../context/UserContext'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";
import Slider from './Slider'
import Cardbox from './Card'

export default function Home() {
    const { userData } = useContext(UserContext)
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) history.push('/')    
    }); 
    return (
      <div>
        <Container>
          <Row className= "slider-section">
            <Col>
              <Slider />
            </Col>
          </Row>
          <Row>
            <Cardbox />
          </Row>
        </Container>
      </div>
    );
}
