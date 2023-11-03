import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../assets/logo.svg";
import One from "../assets/one.svg";
import Two from "../assets/two.svg";
import "./SubHeader.scss";

const SubHeader = () => {
  return (
    <Container maxWidth="xl">
      <div className="subHead_Wrapper">
        <img src={Logo} alt="logo" className="logo" />
        <div className="logos_Wrapper">
          <img src={One} alt="one" className="sub-img" style={{marginRight: '1.5rem'}}/>
          <img src={Two} alt="two" className="sub-img" />
        </div>
      </div>
    </Container>
  );
};

export default SubHeader;
