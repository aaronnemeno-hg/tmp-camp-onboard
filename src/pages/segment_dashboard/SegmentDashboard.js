import React, {useState} from 'react'

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';

import './segment_dashboard.css';

const SegmentDashboard = () => {
  const [key, setKey] = useState('available');

  const [availableCount, setAvailableCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [errorsCount, setErrorsCount] = useState(0);

  return (
    <>
    <Header />
    <div className="segment">
      <Container>
      <Row>
        <Col xs={12}>
          <h1 className="segment__title camp-title">Onboarding Dashboard</h1> 
        </Col>
      </Row>        
      <Row>
        <Col>
          <Tabs
            id="segment-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="segment__tabs camp-tabs"
          >
            <Tab eventKey="available" title={`Available (${availableCount})`}>
              <p>Available</p> 
            </Tab>
            <Tab eventKey="in-progress" title={`In Progress (${inProgressCount})`}>
              <p>In Progress</p> 
            </Tab>
            <Tab eventKey="errors" title={`Errors (${errorsCount})`}>
              <p>Errors</p> 
            </Tab>
          </Tabs>
        </Col>
      </Row>
      </Container>
    </div>
    <Footer />
    </>
  )
}

export default SegmentDashboard;