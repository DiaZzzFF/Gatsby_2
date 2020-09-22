import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__copyright">
          all rights reserved &copy;{new Date().getFullYear().toString()}
        </p>
      </div>
    </footer>
  );
};


export default Footer;
