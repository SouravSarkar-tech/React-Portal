import React, { useState } from "react";
import { createPortal } from "react-dom";
import Massage from "./Massage";
import './Button.css'

const Button = props => {
  const [showMassage, setShowMassage] = useState(false);
  const [fixedMassage, setFixedMassage] = useState(false);

  const closeHandler = () => setShowMassage(false);
  const toggleMassage = () => setFixedMassage(!fixedMassage);

  return (
    <div className="main-box">
      <span className="main-message">Click Below To View Something!</span><br/>
      <button
        className="main-btn"
        onClick={() => {
          setShowMassage(true);
          if (!fixedMassage) {
            setTimeout(() => {
              setShowMassage(false);
            }, 700);
          }
        }}
      >
        Just Click Here!
      </button>
      <div className="main-selector">
        <input id="keepMassagebar" type="checkbox" onChange={toggleMassage} />
        <label htmlFor="keepMassagebar">Just Keep the massage by checking in the check box</label>
      </div>
      {showMassage &&
        createPortal(
          <Massage dismiss={closeHandler} />,
          document.getElementById("massage")
        )}
    </div>
  );
};

export default Button;
