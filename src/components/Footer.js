import React from "react";
import "../components/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <p>Contact us:</p>
        </li>
        <li>
          <a
            href="mailto:queenpinpva@gmail.com"
            aria-label="Email Link to queenpinpva@gmail.com"
          >
            <p>queenpinpva@gmail.com</p>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <p>Follow us:</p>
        </li>
        <li>
          <ul className="socials">
            <li>
              <a
                href="https://www.pinterest.co.uk/QueenPinOnline/"
                target="_blank"
                rel="noreferrer"
                aria-label="Social Media Link"
              >
                <p>
                  <i className="fab fa-pinterest-p"></i>
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/queenpin.online/"
                target="_blank"
                rel="noreferrer"
                aria-label="Social Media Link"
              >
                <p>
                  <i className="fab fa-instagram"></i>
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/devorah-gurevich/"
                target="_blank"
                rel="noreferrer"
                aria-label="Social Media Link"
              >
                <p>
                  <i className="fab fa-linkedin-in"></i>
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/queenpin.va"
                target="_blank"
                rel="noreferrer"
                aria-label="Social Media Link"
              >
                <p>
                  <i className="fab fa-facebook-f"></i>
                </p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <p>Pinterest Management Services</p>
        </li>
        <li>
          <a
            href="../Privacy Policy _ Queen Pin.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <p>Privacy Policy</p>
          </a>
        </li>
        <li>
          <p>All Rights Reserved</p>
        </li>
      </ul>
      <a href="https://danielfeddy.com" target="_blank" rel="noreferrer">
        <p>Website by Daniel Feddy</p>
      </a>
    </div>
  );
}
