import React from "react";
import '../styles/styles.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return <div className="Footer">{`Copyright © ${year}`}</div>;
};

export default Footer;
