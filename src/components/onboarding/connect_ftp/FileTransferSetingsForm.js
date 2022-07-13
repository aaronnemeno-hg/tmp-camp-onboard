import React from 'react';
import { Modal } from 'react-bootstrap';

const FileTransferSettingsForm = ({show, handleOnSave}) => {
  return (
    <>
      <Modal className="onboarding__fts-modal" show={show} size={'xl'}>
        <Modal.Header>
          <h4>File Transfer Settings</h4>
        </Modal.Header> 
        <Modal.Body>
          <div className="onboarding__fts-row">
            <div className="onboarding__fts-group camp-form-group">
              <label className="camp-form-label">
                Connection Name
              </label>
              <input
                className="camp-input"
                type="text"
                placeholder="Name for your connection"
              />
            </div>
          </div>
          <div className="onboarding__fts-row">
            <div className="onboarding__fts-wrapper camp-form-wrapper">
              <div className="onboarding__fts-group camp-form-group">
                <label className="camp-form-label">
                  FTP Host Site<span className="required">*</span>
                </label>
                <input 
                  className="camp-input"
                  type="text"
                  placeholder="ftp-site.com"
                />
              </div>
              <div className="onboarding__fts-group camp-form-group">
                <label className="camp-form-label">
                  Port Number
                </label>
                <input
                  className="camp-input"
                  type="text"
                  placeholder="If you don't know it, leave it in blank"
                 />
              </div>
            </div>
          </div>
          <div className="onboarding__fts-row">
            <div className="onboarding__fts-wrapper camp-form-wrapper">
              <div className="onboarding__fts-group camp-form-group">
                <label className="camp-form-label camp-form-group">
                  Destination Directory
                </label> 
                <input
                  className="camp-input"
                  type="text"
                  placeholder="/path/to/the/file/on/directory"
                />
              </div>
              <div className="onboarding__fts-group camp-form-group">
                <label className="camp-form-label">
                  Transfer Mode<span className="required">*</span>
                </label>
              </div>
            </div>
          </div>
          <div className="onboarding__fts-row">
            <div className="onboarding__fts-wrapper camp-form-wrapper">
              <div className="onboarding__fts-group camp-form-group">
                <label className="camp-form-label">
                  Username<span className="required">*</span>
                </label>
                <input
                  className="camp-input"
                  type="text"
                  placeholder="Enter a name..."
                />
              </div>
              <div className="onboarding__fts-group camp-form-group">
                <label className="camp-form-label">
                  Password<span className="required">*</span>
                </label>
                <input className="camp-input" type="password" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="onboarding__footer">
          <div className="onboarding__footer-wrapper">
            <button
              className="onboarding__btn-save camp-btn-primary"
              type="button" 
              onClick={handleOnSave}
            >
              Save
            </button>
            <button
              className="onboarding__btn-cancel camp-btn-secondary"
              type="button"
            >
              Cancel
            </button>
          </div>
          <div className="onboarding__footer-wrapper">
            <button 
              className="onboarding__btn-test-connect camp-btn-secondary"
              type="button"
            >
              Test Connection
            </button>
            <button
              className="onboarding__btn-clear camp-btn-secondary"
              type="button"
            >
              Clear Settings
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default FileTransferSettingsForm;