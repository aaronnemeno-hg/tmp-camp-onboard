import React, { useState, useEffect } from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Container, Col, Row } from 'react-bootstrap';

// onboarding components
import ConnectWithFTP from '../../components/onboarding/connect_ftp/ConnectWithFTP';
import CreateSegment from '../../components/onboarding/new_segment/CreateSegment';
import StatusBar from '../../components/status_bar/StatusBar';

import CreateSegmentModal from '../../components/onboarding/new_segment/CreateSegmentModal';

import './onboarding.css';
import FileTransferSettingsForm from '../../components/onboarding/connect_ftp/FileTransferSetingsForm';

const Onboarding = () => {
  const [showFTPServerSettingsForm, setShowFTPServerSettingsForm] = useState(false);
  const [showCreateSegmentModal, setShowCreateSegmentModal] = useState(false);
  const [showCreateSegmentStatus, setShowCreateSegmentStatus] = useState("");
  
  const handleCreateSegmentModalClose = () => {
    setShowCreateSegmentModal(!showCreateSegmentModal); 
  }

  return (
    <>
      <Header />
      <div className="onboarding">
        <Container>
          <Row>
            <Col xs={12}>
            <h1 className="onboarding__title camp-title">Create Segment</h1> 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
            </Col>
            <Col xs={12} md={6}>
              <ConnectWithFTP 
                showFTPServerSettingsForm={showFTPServerSettingsForm}
                setShowFTPServerSettingsForm={setShowFTPServerSettingsForm}
              />
            </Col>
          </Row>    
          <Row>
            <StatusBar status="SUCCESS" message="Test">
              <p>Children</p>
            </StatusBar>
            <StatusBar status="ERROR" message="Test">
              <p>Children</p>
            </StatusBar>
            <StatusBar status="INFO" message="Test">
              <p>Children</p>
            </StatusBar>
          </Row>
          <Row>
            <Col xs={12}>
              <CreateSegment />
            </Col>
          </Row>
        </Container>
      </div>
      <CreateSegmentModal 
        status="ERROR"
        title="Successfully Created Segment!"
        show={showCreateSegmentModal}
        handleModalButtonClick={handleCreateSegmentModalClose}
      >
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </CreateSegmentModal>
      <FileTransferSettingsForm 
        show={showFTPServerSettingsForm}
        showFTPServerSettingsForm={showFTPServerSettingsForm}
        setShowFTPServerSettingsForm={setShowFTPServerSettingsForm}
      />
      <Footer />
    </>
  )
}

export default Onboarding;