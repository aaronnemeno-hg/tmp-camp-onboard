import React, { useState, useEffect } from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Container, Col, Row } from 'react-bootstrap';

import StatusBar from '../../components/status_bar/StatusBar';
// onboarding components
import DragAndDropUploadBak from '../../components/onboarding/upload_files/DragAndDropUploadBak';
import DragAndDropUpload from '../../components/onboarding/upload_files/DragAndDropUpload';
import ConnectWithFTP from '../../components/onboarding/connect_ftp/ConnectWithFTP';
import CreateSegment from '../../components/onboarding/new_segment/CreateSegment';
import CreateSegmentModal from '../../components/onboarding/new_segment/CreateSegmentModal';
import FileTransferSettingsForm from '../../components/onboarding/connect_ftp/FileTransferSetingsForm';
import DeleteFile from '../../components/onboarding/upload_files/DeleteFile';
import ReuploadFile from '../../components/onboarding/upload_files/ReuploadFile';

import './onboarding.css';

const Onboarding = () => {
  const [fileUploadStatus, setFileUploadStatus] = useState("");
  const [fileUploadMessage, setFileUploadMessage] = useState("");
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
          <Row style={{paddingTop: '1.5rem'}}>
            <Col xs={12} md={6}>
              {/* <DragAndDropUploadBak /> */}
              <DragAndDropUpload />
            </Col>
            <Col xs={12} md={6}>
              <ConnectWithFTP 
                showFTPServerSettingsForm={showFTPServerSettingsForm}
                setShowFTPServerSettingsForm={setShowFTPServerSettingsForm}
              />
            </Col>
          </Row>    
          <Row>
            {
              (() => {
                if (fileUploadStatus !== "") {
                  if (fileUploadStatus === "SUCCESS") {
                    return (
                      <StatusBar status={fileUploadStatus} message={fileUploadMessage} />
                    )
                  } else if (fileUploadStatus === "ERROR") {
                    return (
                      <StatusBar status={fileUploadStatus} message={fileUploadMessage}>
                        <ReuploadFile />
                      </StatusBar>
                    )
                  } else if (fileUploadStatus === "INFO") {
                    return (
                      <StatusBar status={fileUploadStatus} message={fileUploadMessage}>
                        <DeleteFile />
                      </StatusBar>
                    )
                  }
                } else {
                  return(<></>)
                }
              })()
            }
          </Row>
          <Row style={{paddingTop: '1.5rem'}}>
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