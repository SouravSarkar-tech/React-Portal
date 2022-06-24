import React from "react";
import './Massage.css'

const Massage = ({ message = "Hey! How Are You?", dismiss }) => (
  <div className="massage-box">
    <span className="massage-desc">{message}</span>
    <span className="massage-close" icon="fa-close" onClick={dismiss}>
      x
    </span>
  </div>
);

export default Massage;
