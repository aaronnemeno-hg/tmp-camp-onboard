import React from 'react'
import Toggle from 'react-toggle';

const ToggleSwitch = ({
    className,
    toggleId,
    defaultChecked,
    handleToggleChange,
    labelValue,
    disabled
}) => {
  let customClass = `camp-toggle-switch ${className}`;
  return (
    <div className={customClass}>
      <Toggle
        id={toggleId}
        defaultChecked={defaultChecked}
        onChange={handleToggleChange}
        disabed={disabled}
      />
      <label htmlFor={toggleId}>{labelValue}</label> 
    </div>
  )
}

export default ToggleSwitch;