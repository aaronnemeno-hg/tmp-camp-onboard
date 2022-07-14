import React from 'react'

import {ReactComponent as RetryIcon} from '../../../assets/retry.svg';

import './upload_files.css';

const ReuploadFile = () => {

  const handleRetryUpload = () => {
    console.log('Clicked retry upload file!');
  }

  return (
    <>
      <div className="onboarding__reupload-container">
        <button
          type="button"
          href="#"
          className="onboarding__reupload-btn"
          onClick={handleRetryUpload}
        >
          <RetryIcon /><span>Reupload File</span>
        </button>
      </div>
    </>
  )
}

export default ReuploadFile;