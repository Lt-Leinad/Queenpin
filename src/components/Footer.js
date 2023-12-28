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
                href="https://pinterest.com/queenpinpva"
                aria-label="Social Media Link"
              >
                <p>
                  <i class="fab fa-pinterest-p"></i>
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/queenpin.online/"
                aria-label="Social Media Link"
              >
                <p>
                  <i class="fab fa-instagram"></i>
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/devorah-gurevich/"
                aria-label="Social Media Link"
              >
                <p>
                  <i class="fab fa-linkedin-in"></i>
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/queenpin.va"
                aria-label="Social Media Link"
              >
                <p>
                  <i class="fab fa-facebook-f"></i>
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
          <a href="/components/Privacy Policy _ Queen Pin.pdf">
            <p>Privacy Policy</p>
          </a>
        </li>
        <li>
          <p>All Rights Reserved</p>
        </li>
      </ul>
      <a href="https://danielfeddy.com">
        <p>Website by Daniel Feddy</p>
      </a>
    </div>
  );
}
