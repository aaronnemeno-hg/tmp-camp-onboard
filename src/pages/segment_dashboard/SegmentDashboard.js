import React from 'react'

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Container, Col, Row } from 'react-bootstrap';

import './segment_dashboard.css';

const SegmentDashboard = () => {
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
      </Container>
    </div>
    <Footer />
    </>
  )
}

export default SegmentDashboard;