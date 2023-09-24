import React from "react";
import facecard from "../images/face_card.png";
import backcard from "../images/back_card.png";
import logo from "../images/card-logo.svg";

const Credit = ({ cardName, cardNumber, month, year, cvc }) => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="cards">
          <div className="face_card">
            <img src={facecard} alt="facecard"></img>
            <div className="carddetails">
              <img src={logo} alt="" aria-hidden="true"></img>
              <span className="cardnumber">
                {cardNumber || "0000 0000 0000 0000"}
              </span>
            </div>
            <div className="info">
              <span className="cardname">{cardName || "Jane Appleseed"}</span>
              <span className="expdate">
                {month || "00"}/{year || "00"}
              </span>
            </div>
          </div>
          <div className="back_card">
            <img src={backcard} alt="backcard"></img>
            <div className="cvc">
              <span>{cvc || "000"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;
