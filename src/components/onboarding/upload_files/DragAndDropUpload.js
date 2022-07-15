import React from 'react';
import Dropzone from 'react-dropzone';
import { ProgressBar } from 'react-bootstrap';

import {ReactComponent as UploadIcon} from '../../../assets/upload.svg';

class DragAndDropUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: []
    }

    this.onDrop = (files) => {
      console.log("FILES");
      console.log(files);
      files.map(file => {
        console.log("FILE DETAIL");
        console.log(file);
        // upload to bucket logic here
        file.progress = 71;
      })
      console.log("FILES");
      console.log(files);
      this.setState({files});
    };

  }

  render() {
    const files = this.state.files.map(file => (
      <div key={file.name} className="onboarding__uploading-item">
        <h3>{file.progress == 100 ? "Done!": "Uploading ..."}</h3>
        <h4>{file.name}</h4>
        <div className="onboarding__uploading-item-detail">
          <p><span>{`${file.progress}%`}</span><span>{`1 Second left`}</span></p>
          <ProgressBar now={file.progress} />
        </div>
      </div>
    ));

    return (
      <div className="onboarding__upload-container">
        <h3 className="onboarding__upload-title camp-action-label">
          Upload from your device
        </h3>
        <Dropzone onDrop={this.onDrop}>
            {
            ({getRootProps, getInputProps}) => (
              <>
                {this.state.files.length > 0 ?
                  (
                    <div className="onboarding__uploading">
                      <div className="onboarding__uploading-list">
                        {files}
                      </div>
                    </div>
                  ):
                  (
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
                    </div>
                  ) 
                }
              </>
            )
            }
        </Dropzone>
      </div>
    );
  }
}

export default DragAndDropUpload;