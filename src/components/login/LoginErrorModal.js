import React from 'react'
import { Modal, Button } from 'react-bootstrap';

import {ReactComponent as ErrorModal2Icon} from '../../assets/error-modal-2.svg';

const LoginErrorModal = ({show, title, children}) => {
  return (
    <Modal className="login__error-modal camp-modal" show={show}>
      <Modal.Header>
        <p><ErrorModal2Icon /></p>
        <h4>{`${title}`}</h4>
      </Modal.Header>
      <Modal.Body>
        {children} 
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{}}>Go Back</Button>
      </Modal.Footer>
    </Modal>
  )
}
;
export default LoginErrorModal;