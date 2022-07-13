import React from 'react';

import {ReactComponent as SettingsIcon} from '../../../assets/gear.svg';

import './connect_ftp.css';

const ConnectWithFTPButton = ({
    buttonValue,
    showFTPServerSettingsForm,
    setShowFTPServerSettingsForm
  }) => {

  const handleClick = () => {
    setShowFTPServerSettingsForm(true);
  }

  return (
    <a
      className="onboarding__button camp-btn-primary"
      href="#"
      onClick={handleClick}
    >
      <SettingsIcon /> {buttonValue}
    </a>
  );
}

const ConnectWithFTP = ({
  showFTPServerSettingsForm, setShowFTPServerSettingsForm
}) => {
  return (
    <div className="onboarding__connect-with-ftp">
      <h3 className="onboarding__action-label camp-action-label">Connect with FTP Server</h3>
      <ConnectWithFTPButton 
        buttonValue="Server Settings"
        showFTPServerSettingsForm={showFTPServerSettingsForm}
        setShowFTPServerSettingsForm={setShowFTPServerSettingsForm}
      />
    </div>
  );
}

export default ConnectWithFTP;