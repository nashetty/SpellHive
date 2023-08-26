import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./SocialFollow.css";

// based on tutorial by
// https://www.digitalocean.com/community/tutorials/creating-a-social-follow-component-in-react

export default function SocialFollow() {
  return (
    <div className="SocialFollow-container">
      <p>
        <span>Follow us</span>
        <span className="social">
          <a className="social" href="https://www.youtube.com/" target="_blank">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </span>
        <span className="social">
          <a
            className="social"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </span>
        <span className="social">
          <a className="social" href="https://twitter.com/" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </span>
        <span className="social">
          <a
            className="social"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </span>
      </p>
    </div>
  );
}
