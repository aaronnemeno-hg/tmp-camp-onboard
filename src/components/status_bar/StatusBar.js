import React from 'react';

import {ReactComponent as CompletedIcon } from '../../assets/completed.svg';
import {ReactComponent as ErrorIcon } from '../../assets/error.svg';

import './status_bar.css';

const StatusBar = ({status, message, children}) => {
  let statusBarClasses = "status-bar ";
  if (status === "SUCCESS") {
    statusBarClasses += "success";
  } else if (status === "ERROR") {
    statusBarClasses += "error";
  } else {
    statusBarClasses += "info";
  }

  return (
    <div className={statusBarClasses}>
      {
        (() => {
          if (status === "SUCCESS") {
            return (<p className="status-bar-message"><CompletedIcon /> {message}</p>)
          } else if (status === "ERROR") {
            return (<p className="status-bar-message"><ErrorIcon /> {message}</p>)
          } else {
            return (<p className="status-bar-message">{message}</p>)
          }
        })()
      }
      {children}
    </div>
  )
}

export default StatusBar;