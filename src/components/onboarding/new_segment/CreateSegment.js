import React, {useState} from 'react';
import Toggle from 'react-toggle';
import ToggleSwitch from '../../customs/ToggleSwitch';

import './create_segment.css'

const CreateSegment = () => {
  const [showNotesInput, setShowNotesInput] = useState(false);

  const handleToggleChange = () => {
    setShowNotesInput(!showNotesInput);    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked create segment form");
  }

  return (
    <div className="onboarding__new-segment">
      <h3 className="onboarding__action-label camp-action-label">About your new segment</h3>
      <div className="onboarding__form-container">
        <form onSubmit={handleSubmit}>
          <div className="onboarding__form-wrapper camp-form-wrapper">
            <div className="onboarding__form-group camp-form-group">
              <label
                htmlFor="segment_name"
                className="onboarding__form-label camp-form-label"
              >
                Segment Name
              </label>
              <input 
                className="onboarding__form-input camp-input"
                type="text"
                name="segment_name"
                placeholder="Name your segment"
              />
            </div>
            <div className="onboarding__form-group camp-form-group">
              <ToggleSwitch
                className="onboarding__toggle-switch"
                toggleId="notesSwitch"
                defaultChecked={false}
                labelValue="Notes"
                disabed={false}
                handleToggleChange={handleToggleChange}
              />
              {showNotesInput ?
                (<input 
                  type="text"
                  name="notes"
                  className="camp-input"
                  placeholder="Enter a description..."
                />)
              : (<></>)
              }
            </div>
          </div>
          <div className="onboarding__form-group camp-form-group">
            <button 
              className="onboarding__form-submit camp-btn-primary"
              type="submit" 
            >
              Create Segment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateSegment;