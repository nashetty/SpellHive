import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="submit-container">
        <p className="submit-text">
          Thank you! <br />
          We'll be in touch soon.
        </p>
        <img src="img/emoji-smiley.png" alt="smiling-emoji" />
      </div>
    );
  }

  return (
    <div id="contact-main">
      <h2 id="contact-header">Get in touch!</h2>
      <p id="contact-paragraph">
        We'd love to hear from you! <br />
        If you have any questions or wish to provide some feedback, <br />
        simply fill in the fields below and we'll get back to you <br />
        within the next 24 hours!{" "}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-name">
          <input
            type="text"
            placeholder="Your Full Name *"
            name="name"
            className="form-inner"
            required
          />
        </div>
        <div className="form-email">
          <input
            type="email"
            placeholder="Your Email *"
            name="email"
            className="form-inner"
            required
          />
        </div>
        <div className="form-message">
          <textarea
            placeholder="Your Message *"
            name="message"
            className="form-inner-message"
            required
          />
        </div>
        <div className="form-radio">
          <p id="rate-paragraph">
            How would you rate SpellHive from 1-5? <br />
            (5 being the best)
          </p>
          <input type="radio" name="rating" />
          <label className="radio" for="1">
            1
          </label>
          <input type="radio" name="rating" />
          <label className="radio" for="2">
            2
          </label>
          <input type="radio" name="rating" />
          <label className="radio" for="3">
            3
          </label>
          <input type="radio" name="rating" />
          <label className="radio" for="4">
            4
          </label>
          <input type="radio" name="rating" />
          <label className="radio" for="5">
            5
          </label>
        </div>
        <div className="submit">
          <button className="button">Submit!</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
