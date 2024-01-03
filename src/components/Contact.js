import React from "react";
import "../components/Contact.css";

export default function Contact() {
  (function scrollUp() {
    window.scrollTo(0, 0);
  })();
  return (
    <div className="contact-body">
      <h1>BOOK A CHAT</h1>
      <p>
        I'd love to learn more about your business and answer any questions you
        may have. <br />
        Use my Calendly below to book a time to meet with me via Zoom.
      </p>
      <div className="Calendly">
        <iframe
          title="Embedded Content"
          name="htmlComp-iframe"
          width="100%"
          height="100%"
          data-src=""
          src="https://calendly.com/queenpin/30min?back=1&month=2023-12"
        ></iframe>
      </div>
      <div className="contact-block">
        <div className="contact-details">
          <h1>CONTACT</h1>
          <h2>
            Ready to take your Pinterest to the next level? <br />
            Let’s chat!
          </h2>
          <a
            aria-label="Email to queenpinpva@gmail.com Link"
            href="mailto:queenpinpva@gmail.com"
          >
            <p>queenpinpva@gmail.com</p>
          </a>
          <ul className="contact-list">
            <li>
              <a
                aria-label="Social Media Link"
                href="https://www.pinterest.co.uk/QueenPinOnline/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a
                aria-label="Social Media Link"
                href="https://www.instagram.com/queenpin.online/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                aria-label="Social Media Link"
                href="https://www.linkedin.com/in/devorah-gurevich/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                aria-label="Social Media Link"
                href="https://www.facebook.com/queenpin.va"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
        <img src="/images/Desk_img.webp" alt="Desk Working" />
      </div>
    </div>
  );
}
