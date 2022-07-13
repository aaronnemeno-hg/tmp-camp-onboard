import React from 'react';
import { Modal, Button } from "react-bootstrap";

import './create_segment.css'

import { ReactComponent as CompletedModalIcon } from '../../../assets/completed-modal.svg';
import { ReactComponent as ErrorModalIcon } from '../../../assets/error-modal.svg'

const CreateSegmentModal = ({status, title, show, children, handleModalButtonClick}) => {
  
  return (
    <>
      <Modal className="onboarding__new-segment-modal camp-modal" show={show}>
        <Modal.Header>
          {
            (
              () => {
                if (status === "SUCCESS") {
                  return (
                    <>
                      <p><CompletedModalIcon /></p>
                      <h4>{`${title}`}</h4>
                    </>
                  )
                } else {
                  return (
                    <>
                      <p><ErrorModalIcon /></p>
                      <h4>{`${title}`}</h4>
                    </>
                  )
                }
              }
            )()
          }         
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          {status === "SUCCESS" ?
            (<Button onClick={handleModalButtonClick}>Continue</Button>)
          : (<Button onClick={handleModalButtonClick}>Go Back</Button>)
          } 
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateSegmentModal;