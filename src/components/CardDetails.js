import React, { useState } from "react";
import complete from "../images/icon-complete.svg";

const CardDetails = ({ updateCreditDetails }) => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  const [cardNameError, setCardNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [monthError, setMonthError] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCardNameBlur = () => {
    if (!cardName) {
      setCardNameError("Cardholder name Required");
    } else {
      setCardNameError("");
    }
  };

  const handleCardNumberBlur = () => {
    if (!cardNumber) {
      setCardNumberError("CardNumber Required");
    } else {
      setCardNumberError("");
    }
  };

  const handleMonthBlur = () => {
    if (
      !month ||
      parseInt(month, 10) < 1 ||
      parseInt(month, 10) > 12 ||
      month.length !== 2
    ) {
      setMonthError("Invalid Month");
    } else {
      setMonthError("");
    }
  };

  const handleCvcBlur = () => {
    if (!cvc || !/^\d+$/.test(cvc)) {
      setCvcError("CVc Must be Numeric");
    } else {
      setCvcError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cardName, cardNumber, month, year, cvc);
    setCardNameError("");
    setCardNumberError("");
    setCvcError("");
    setMonthError("");
    if (!cardName) {
      setCardNameError("Card Holder Name Required");
    }
    if (!cardNumber) {
      setCardNumberError("cardNumber Required");
    }
    if (!/^\d+$/.test(cvc)) {
      setCvcError("Cvc Must be Numeric");
    }
    if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
      setMonthError("Invalid Month");
    }
    if (cardNameError || cardNumberError || cvcError || monthError) {
      return;
    }
    const details = {
      cardName,
      cardNumber,
      month,
      year,
      cvc,
    };

    updateCreditDetails(details);
    setIsSubmitted(true);
  };
  if (isSubmitted) {
    return (
      <div className="confirmation">
        <img src={complete} alt="" />
        <h2>Thank You!</h2>
        <p>We've added your Card details</p>
        <button className="btn" onClick={() => setIsSubmitted(false)}>
          Continue
        </button>
      </div>
    );
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="card_name">
          <label>CARDHOLDER NAME</label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={cardName}
            onChange={(e) => {
              setCardName(e.target.value);
              setCardNameError("");
            }}
            onBlur={handleCardNameBlur}
          ></input>
          {cardNameError && <div className="error">{cardNameError}</div>}
        </div>
        <div className="card_number">
          <label>CARD NUMBER</label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={19}
            value={cardNumber
              .replace(/\D/g, "")
              .slice(0, 16)
              .replace(/(\d{4})/g, "$1 ")}
            onChange={(e) => {
              setCardNumber(e.target.value);
              setCardNumberError("");
            }}
            onBlur={handleCardNumberBlur}
          ></input>
          {cardNumberError && <div className="error">{cardNumberError}</div>}
        </div>
        <div className="two">
          <div className="exp_date">
            <label>EXP. DATE(MM/YY)</label>
            <input
              type="text"
              maxLength={2}
              placeholder="MM"
              value={month}
              onChange={(e) => {
                setMonth(e.target.value);
                setMonthError("");
              }}
              onBlur={handleMonthBlur}
            ></input>
            {monthError && <div className="error">{monthError}</div>}
            <input
              type="text"
              maxLength={2}
              placeholder="YY"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            ></input>
          </div>
          <div className="_cvc">
            <label>CVC</label>
            <input
              type="text"
              maxLength={3}
              placeholder="e.g. 123"
              value={cvc}
              onChange={(e) => {
                setCvc(e.target.value);
                setCvcError("");
              }}
              onBlur={handleCvcBlur}
            ></input>
            {cvcError && <div className="error">{cvcError}</div>}
          </div>
        </div>
        <button type="submit" className="btn">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default CardDetails;
