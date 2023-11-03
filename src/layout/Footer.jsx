import React from "react";
import { Container } from "react-bootstrap";
import Secure from "../assets/lock.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer_Wrapper">
      <Container>
        <div className="footer_Content">
          <div className="copyright_Wrapper">
            <p>Copyright (c) 2023</p>
            <p>Clarifionsupport@clarifion.com</p>
          </div>
          <div className="secure_Wrapper">
            <img src={Secure} alt="secure" />
            <p>Secure 256-bit SSL encryption.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
