import React from 'react';
import './header.css';

import ClientLogo from '../../assets/elc-logo.png';
import {ReactComponent as OnboardingNavIcon} from '../../assets/onboarding-nav.svg';
import {ReactComponent as DashboardNavIcon} from '../../assets/dashboard-nav.svg';
import {ReactComponent as GearNavIcon} from '../../assets/gear.svg'

const MenuItem = ({iconImage, name, isDropDown}) => {
  return (
    !isDropDown ? (
      <li className="header__nav-item">
        <a href="#">{iconImage} <span>{name}</span></a>
      </li>
    ) : (
      // dropdown loop
      <li className="header__nav-item dropdown">
        <a href="#">{iconImage} <span>{name}</span></a>
      </li>
    )
  );
}

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <img className="header__company-logo" src={ClientLogo} />
          <div className="header__app-name">
            <p>
              <span className="header__app-first-letter">C</span><span>ampaign </span> 
              <span className="header__app-first-letter">A</span><span>udience</span>
            </p>
            <p>
              <span className="header__app-first-letter">M</span><span>anagement </span>
              <span className="header__app-first-letter">P</span><span>rogram</span>
            </p>
          </div>
        </div>
        <div className="header__right">
          <ul className="header__nav-list">
            <MenuItem iconImage={<OnboardingNavIcon />} name="Onboarding" isDropDown={false} />
            <MenuItem iconImage={<DashboardNavIcon />} name="Dashboard" isDropDown={false} />
            <MenuItem iconImage={<GearNavIcon />} name="Settings" isDropDown={true} />
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;