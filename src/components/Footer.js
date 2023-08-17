import React from "react";
import '../Styles/styles.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return <div className="Footer">{`© ${year} Katherine D., Patrick W., Zeldrix D.`}</div>;
};

export default Footer;
