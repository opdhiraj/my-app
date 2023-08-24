import React from "react";
import "./footer.css";
const Footer = () => {
  const year = new Date().getFullYear();
  const time = new Date().toLocaleTimeString();
  return (
    <div className="footer-div">
      {time} | OM@Copyright | {year}
    </div>
  );
};

export default Footer;
