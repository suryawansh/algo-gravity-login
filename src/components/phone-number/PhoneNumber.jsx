import React, { useState } from "react";
import "./phone-number.css";

const PhoneNumber = () => {
  const [MobileNumber, setMobileNumber] = useState("");

  return (
    <div className="login-root">
      <div className="netnimbus-logo-root">
        <div className="netnimbus-logo">
          <img src={require("../../assets/Net Nimbus Logo Final-01 1.png")} />
        </div>
        <div className="netnimbus-details">
          <p className="netnimbus-details-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="netnimbus-details-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="netnimbus-details-p">
            Lorem ipsum dolor sit amet,consectetur adipiscing elit.{" "}
          </p>
          <p className="netnimbus-details-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div className="phone-number-root">
        <div>
          <h1 className="login-text">Login</h1>
        </div>
        <div className="phone-number">
          <div className="phone-number-text">Phone Number</div>
          <input
            name=""
            placeholder="Phone Number"
            onChange={(e) => setMobileNumber(e.target.value)}
            className="phone-number-input"
          />
        </div>
        <div className="get-otp-root">
          <button type="default" className="get-otp">
            GET OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumber;
