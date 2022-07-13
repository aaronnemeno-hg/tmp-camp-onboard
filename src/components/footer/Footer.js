import React from 'react';

import ClientLogo from '../../assets/elc-logo.png';
import HylinkLogo from '../../assets/hylink-logo.png';

import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <img className="footer__logo client-logo" src={ClientLogo} />
        <img className="footer__logo hylink-logo" src={HylinkLogo} />
      </div>
    </footer>
  );
}

export default Footer;