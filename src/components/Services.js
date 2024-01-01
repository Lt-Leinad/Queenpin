import React from "react";
import "../components/Services.css";
import { useRef } from "react";

export default function Services() {
  const service = useRef(null);
  const servicesPopUpFunc = function (e) {
    let popup = +[...e.target.classList][0].at(-1) - 1;
    [...service.current.children][popup].classList.remove("display-none");
  };

  const serviceRemoveFunc = function (e) {
    e.target.parentElement.parentElement.classList.add("display-none");
  };
  return (
    <div className="services-body">
      <section className="section1">
        <h1>SERVICES</h1>
        <h2>Monthly Management 2023</h2>
        <div className="growth">
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="0.006 3.6 199.986 193"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0.006 3.6 199.986 193"
            role="presentation"
            aria-hidden="true"
          >
            <g>
              <path d="M40.5 196.6c-2.5 0-5-.8-7.2-2.4-4.3-3.1-6-8.4-4.4-13.5l15-53.3c.8-2.5 0-5-2-6.5l-37-28.6C.7 89.2-1 83.9.6 78.9c1.6-5 6-8.2 11.1-8.3l52-7c2.4 0 4.6-1.6 5.4-3.9l19.5-48.1c1.5-4.8 6-8 11.4-8 5.3 0 9.7 3.2 11.4 8.1l19.9 47.6c.9 2.7 3 4.2 5.5 4.2h.5l50.9 6c5.2.1 9.6 3.4 11.2 8.3 1.6 5.1-.1 10.4-4.4 13.5l-40.4 30.6c-2 1.5-2.9 4-2.1 6.3l17.8 52.5c1.7 5.1-.1 10.4-4.4 13.5-4.2 3.1-9.7 3.1-14 .1L101.8 165c-2-1.4-4.6-1.4-6.6 0l-48 29.3c-2 1.5-4.3 2.3-6.7 2.3zm66.2-38.7l50.1 29.3c1.9 1.4 3.5.3 4 0s2-1.6 1.2-3.8l-17.8-52.5c-1.9-6 .1-12.4 5.2-16l40.4-30.6c1.9-1.4 1.5-3.3 1.3-3.9-.2-.6-.9-2.4-3.3-2.4h-.5l-50.9-6c-6.1-.1-11.4-4-13.3-9.9l-19.9-47.7c-.7-2.2-2.7-2.4-3.3-2.4-.6 0-2.5.2-3.3 2.4L77.2 62.6c-1.8 5.5-7.1 9.4-13.2 9.6l-52 7c-2.3 0-3.1 1.8-3.3 2.4-.2.6-.6 2.5 1.2 3.8L47.1 114c4.9 3.6 7 10 5.1 15.9l-15 53.3c-.8 2.4.7 3.6 1.2 4 .5.3 2.2 1.4 4 0l48-29.3c4.7-3.4 11.3-3.5 16.3 0z"></path>
            </g>
          </svg>
          <h3>THE GROWTH</h3>
          <h4>
            Ideal for those new to Pinterest or those looking to boost their
            traffic.
          </h4>
          <ul>
            <li>Schedule up to 10 fresh pins a day</li>
            <li>Create 30 fresh pin designs</li>
            <li>Create and/or join up to 3 niche-specific boards</li>
            <li>Monthly Report</li>
          </ul>
        </div>
        <div className="maintain">
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="0.006 3.6 199.986 193"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0.006 3.6 199.986 193"
            role="presentation"
            aria-hidden="true"
          >
            <g>
              <path d="M40.5 196.6c-2.5 0-5-.8-7.2-2.4-4.3-3.1-6-8.4-4.4-13.5l15-53.3c.8-2.5 0-5-2-6.5l-37-28.6C.7 89.2-1 83.9.6 78.9c1.6-5 6-8.2 11.1-8.3l52-7c2.4 0 4.6-1.6 5.4-3.9l19.5-48.1c1.5-4.8 6-8 11.4-8 5.3 0 9.7 3.2 11.4 8.1l19.9 47.6c.9 2.7 3 4.2 5.5 4.2h.5l50.9 6c5.2.1 9.6 3.4 11.2 8.3 1.6 5.1-.1 10.4-4.4 13.5l-40.4 30.6c-2 1.5-2.9 4-2.1 6.3l17.8 52.5c1.7 5.1-.1 10.4-4.4 13.5-4.2 3.1-9.7 3.1-14 .1L101.8 165c-2-1.4-4.6-1.4-6.6 0l-48 29.3c-2 1.5-4.3 2.3-6.7 2.3zm66.2-38.7l50.1 29.3c1.9 1.4 3.5.3 4 0s2-1.6 1.2-3.8l-17.8-52.5c-1.9-6 .1-12.4 5.2-16l40.4-30.6c1.9-1.4 1.5-3.3 1.3-3.9-.2-.6-.9-2.4-3.3-2.4h-.5l-50.9-6c-6.1-.1-11.4-4-13.3-9.9l-19.9-47.7c-.7-2.2-2.7-2.4-3.3-2.4-.6 0-2.5.2-3.3 2.4L77.2 62.6c-1.8 5.5-7.1 9.4-13.2 9.6l-52 7c-2.3 0-3.1 1.8-3.3 2.4-.2.6-.6 2.5 1.2 3.8L47.1 114c4.9 3.6 7 10 5.1 15.9l-15 53.3c-.8 2.4.7 3.6 1.2 4 .5.3 2.2 1.4 4 0l48-29.3c4.7-3.4 11.3-3.5 16.3 0z"></path>
            </g>
          </svg>
          <h3>THE MAINTENANCE</h3>
          <h4>
            Perfect for those with a great Pinterest looking to maintain their
            traffic.
          </h4>
          <ul>
            <li>Schedule up to 5 fresh pins a day</li>
            <li>Create 15 fresh pin designs</li>
            <li>Create and/or join up to 3 niche-specific boards</li>
            <li>Monthly Report</li>
          </ul>
        </div>
      </section>
      <section className="section2">
        <h1>OTHER SERVICES</h1>
        <p>
          In addition to monthly management, I offer additional services and
          custom packages to suit all your Pinterest needs.
        </p>
        <div className="services">
          <div className="row1">
            <button className="service1" onClick={servicesPopUpFunc}>
              ACCOUNT
              <br />
              SETUP
            </button>
            <button className="service2" onClick={servicesPopUpFunc}>
              ACCOUNT
              <br />
              AUDIT
            </button>
          </div>
          <div className="row2">
            <button className="service3" onClick={servicesPopUpFunc}>
              PIN
              <br />
              DESIGN
              <br />
              PACKAGE
            </button>
            <button className="service4" onClick={servicesPopUpFunc}>
              PIN
              <br />
              DESCRIPTION <br />
              PACKAGE
            </button>
            <button className="service5" onClick={servicesPopUpFunc}>
              CUSTOM
              <br />
              PACKAGE
            </button>
          </div>
        </div>
      </section>
      <section className="section3">
        <img src="/images/laptop_img.webp" alt="laptop" />
        <h1>CURIOUS ABOUT PRICING?</h1>
        <form
          className="form"
          name="Queenpin-Contact-Form-Services-Page"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="form-section">
            <input type="text" name="name" placeholder="Name *" required />
          </p>

          <p className="form-section double-form-section">
            <input
              id="email-box"
              type="email"
              name="email"
              placeholder="Email *"
              required
            />
            <input
              id="phone-number-box"
              type="tel"
              name="phone number"
              placeholder="Phone Number"
            />
          </p>

          <p className="form-section">
            <input
              id="subject-box"
              type="text"
              name="subject"
              placeholder="Subject *"
              required
            />
          </p>

          <p className="form-section">
            <textarea
              type="text"
              id="msg-box"
              name="message"
              placeholder="Message *"
              required
            ></textarea>
          </p>

          <p>
            <button className="form-button" type="submit">
              SUBMIT
            </button>
          </p>
        </form>
      </section>
      <div className="pop-ups" ref={service}>
        <div className="services-popup display-none">
          <h1>ACCOUNT SETUP</h1>
          <h2>
            Pinterest business account setup with rich pins, creation and
            organization of boards, SEO research, keyword report, and more!
          </h2>
          <div className="services-popup-btns">
            <button onClick={serviceRemoveFunc}>Back</button>
          </div>
        </div>

        <div className="services-popup display-none">
          <h1>ACCOUNT AUDIT</h1>
          <h2>
            I will analyze your Pinterest business account and offer/integrate
            suggested changes to get it ready for monthly services.
          </h2>
          <div className="services-popup-btns">
            <button onClick={serviceRemoveFunc}>Back</button>
          </div>
        </div>

        <div className="services-popup display-none">
          <h1>PIN DESIGN PACKAGE</h1>
          <h2>
            This includes incorporating your logo, brand colors and fonts to
            fresh template designs. This will be a custom package and price
            according to the requested amount of pins.
          </h2>
          <div className="services-popup-btns">
            <button onClick={serviceRemoveFunc}>Back</button>
          </div>
        </div>

        <div className="services-popup display-none">
          <h1>PIN DESCRIPTION PACKAGE</h1>
          <h2>
            Fresh pin descriptions for each fresh pin integrating ideal SEO
            keywords
          </h2>
          <div className="services-popup-btns">
            <button onClick={serviceRemoveFunc}>Back</button>
          </div>
        </div>

        <div className="services-popup display-none">
          <h1>CUSTOM PACKAGE</h1>
          <h2>
            A custom management or services package for you based on your
            Pinterest needs and goals!
          </h2>
          <div className="services-popup-btns">
            <button onClick={serviceRemoveFunc}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}
