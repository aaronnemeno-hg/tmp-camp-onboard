import React, { useCallback, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';

import {ReactComponent as UploadIcon} from '../../../assets/upload.svg';

import './upload_files.css';

const DragAndDropUploadBak = () => {
    const [fileUploads, setFileUploads] = useState([]);

    async function myCustomFileGetter(event) {
      const files = [];
      const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;
  
      for (var i = 0; i < fileList.length; i++) {
        const file = fileList.item(i);
          
        Object.defineProperty(file, 'myProp', {
          value: true
        });
          
        console.log(file);
        files.push(file)
      }
      // set upload files
      setFileUploads(files);
  
      return files;
    }
  
    const handleUpload = async () => {
      console.log("Upload begin");
      console.log(fileUploads);
      var formData = new FormData();
      for (const fileUpload of fileUploads) {
        console.log(fileUpload);
        formData.append('files', fileUpload, fileUpload.name);
      }

    //   const responseData = await fetchData(
    //     'http://localhost:8000/api/v1/upload_hello_world/',
    //     { method: 'POST', body: formData }
    //   );
    }
  
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
      getFilesFromEvent: event => myCustomFileGetter(event)
    });
  
    const files = acceptedFiles.map((file) => {
      return (
        <li key={file.name}>
          {file.name} has <strong>myProps</strong>: {file.myProp === true ? 'YES' : ''}
          <ProgressBar now={50} />
        </li>
      )
    });
  
    return (
      <div className="onboarding__upload-container">
        <h3 className="onboarding__upload-title camp-action-label">
          Upload from your device
        </h3>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <div className="onboarding__upload-dropzone">
            <UploadIcon /> 
            <p className="onboarding__upload-instructions">
              <span>Drag & drop your file here, or </span>
              <span className="linkify">browse</span>
            </p>
            <p className="onboarding__upload-instructions">
              <span>.CSV and .JS files only. Must be less than 1GB.</span>
            </p>
          </div>
          <aside>
            <ul>{files}</ul>
          </aside>
        </div>
        {/* <button 
          className="camp-btn-primary"
          type="button"
          onClick={handleUpload}
        >
          Upload
        </button> */}
      </div>
    )
}

export default DragAndDropUploadBak
