import React from 'react'

import {ReactComponent as TrashBinIcon} from '../../../assets/trashbin.svg';

import './upload_files.css';

const DeleteFile = () => {
  const handleDeleteFile = (e) => {
    e.preventDefault();
    console.log('Clicked delete file!');
  }

  return (
    <>
      <div className="onboarding__delete-container">
        <button
          type="button"
          href="#"
          className="onboarding__delete-btn"
          onClick={handleDeleteFile}
        >
          <TrashBinIcon /><span>Delete File</span>
        </button>
      </div>
    </>
  )
}

export default DeleteFile;