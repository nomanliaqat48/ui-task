import React from "react";
import { Card } from "react-bootstrap";
import Avatar from "../assets/Rectangle.svg";
import "./FeedbackCard.scss";
import Stars from "../assets/Stars.svg";
import Verify from "../assets/verify.svg";

const FeedbackCard = () => {
  return (
    <Card className="feedBackCard_wrapper">
      <div className="feedbackCard_Content">
        <img src={Avatar} alt="avatar" />
        <div className="name_stars_Div">
          <img src={Stars} alt="stars" />
          <div className="name_Content">
            <p>Ken T.</p>
            <div className="verified">
              <img src={Verify} alt="verified" />
              <p>Verified Customer</p>
            </div>
          </div>
        </div>
      </div>
      <p>
        “As soon as the Clarifions arrived I put one in my bedroom. This was
        late in the afternoon. When I went to the bedroom in the evening it
        smelled clean. When I went to bed I felt I could breathe better.
        Wonderful.”
      </p>
    </Card>
  );
};

export default FeedbackCard;
