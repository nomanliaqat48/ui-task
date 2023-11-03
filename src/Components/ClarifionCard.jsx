import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "../assets/image.svg";
import "./ClarifionCard.scss";
import FeedbackCard from "./FeedbackCard";
import ProductCard from "./ProductCard";

const ClarifionCard = () => {
  return (
    <Container>
      <Card className="clarifion_Card">
        <Row>
          <h2 className="text-center d-sm-none d-block">
            <span className="one_Time">ONE TIME ONLY</span> special price for 6
            extra Clarifion for only <span className="each">$14 each</span>{" "}
            ($84.00 total!)
          </h2>
          <Col lg={6} md={12} sm={12}>
            <div className="clarifion_imageCard_Wrapper">
              <img src={Image} alt="image" className="w-100" />
            </div>
            <FeedbackCard />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <ProductCard />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ClarifionCard;
