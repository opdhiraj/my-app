import React from "react";
import "./level2form.css";
const Level2Form = () => {
  return (
    <div className="main-div">
      <div className="card-div">
        <h2>SUBSCRIBE</h2>
        <h4>Sign up with your email address to recieve news and updates.</h4>
        <div className="form-div">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="button-div">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Level2Form;
