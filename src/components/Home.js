import React from "react";
import "../components/Home.css";

export default function Home() {
  if (window.innerWidth > 800 && window.innerHeight > 650) {
    setTimeout(function () {
      document.querySelector(".contact-modal").classList.remove("display-none");
    }, 3000);
  }

  const xOutFunc = function () {
    document.querySelector(".contact-modal").classList.add("display-none");
  };

  return (
    <div className="home-body">
      <section className="section1">
        <div className="section1-content">
          <img src="/images/Home_s1_img.webp" alt="section1 img" />
          <h1>
            GROW YOUR PINTEREST, <br />
            GROW YOUR BUSINESS
          </h1>
          <p>
            Whether your goal is to grow your blog, increase sales, or promote
            your services, Pinterest is the place to discover new audiences and
            customers. Leave it to me to boost your Pinterest presence and help
            you achieve your business goals!
          </p>
          <a href="/Contact" className="section1-button section1-button1">
            <button>PERFECT YOUR PINTEREST TODAY!</button>
          </a>
          <a href="/About" className="section1-button section1-button2">
            <button aria-label="Learn more about Queen Pin">LEARN MORE</button>
          </a>
        </div>
      </section>
      <section className="section1-mob">
        <div className="section1-mob-content">
          <h1>
            GROW YOUR PINTEREST, <br />
            GROW YOUR BUSINESS
          </h1>
          <p>
            Whether your goal is to grow your blog, increase sales, or promote
            your services, Pinterest is the place to discover new audiences and
            customers. Leave it to me to boost your Pinterest presence and help
            you achieve your business goals!
          </p>
          <div className="section1-mob-button-container">
            <a
              href="/Contact"
              className="section1-mob-button section1-mob-button1"
            >
              <button>PERFECT YOUR PINTEREST TODAY!</button>
            </a>
            <a
              href="/About"
              className="section1-mob-button section1-mob-button2"
            >
              <button aria-label="Learn more about Queen Pin">
                LEARN MORE
              </button>
            </a>
          </div>
          <img src="/images/Home_s1_img.webp" alt="section1 img" />
        </div>
      </section>
      <section className="section2 section ">
        <div className="section2-content">
          <p>
            "I absolutely LOVE working with Devorah! As a full-time food
            blogger, photographer, and influencer - it’s been impossible for me
            to keep up with Pinterest. I basically had no Pinterest presence
            before Devorah, but she’s completely turned that around! Her work
            has greatly increased blog views, and overall boosted our brand
            awareness. Devorah has also just been such a joy to work with! She’s
            organized, thoughtful, creative, and truly goes above and beyond.
            I’m so lucky to have her on my team!"
          </p>
          <p>
            - Samantha, <em>Sam Does Her Best</em>
          </p>
        </div>
      </section>
      <section className="section3 section ">
        <div className="section3-content">
          <div className="section3-content-left">
            <h1>
              FROM <br />
              THE <br />
              <span>BLOG</span>
            </h1>
            <a href="/post/pinterest-management-boosting-blog-success-for-food-bloggers-a-case-study">
              <button>READ MORE</button>
            </a>
          </div>
          <img src="/images/Home_s3_img.webp" alt="Blog Post" />
        </div>
      </section>
      <section className="section4 section ">
        <h1>CONTACT</h1>
        <h2>
          <a
            href="mailto:queenpinpva@gmail.com"
            aria-label="queenpinpva@gmail.com"
          >
            queenpinpva@gmail.com
          </a>
        </h2>
        <ul className="contact-list">
          <li>
            <a
              href="https://pinterest.com/queenpinpva"
              aria-label="Social Media Link"
            >
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/queenpin.online/"
              aria-label="Social Media Link"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/devorah-gurevich/"
              aria-label="Social Media Link"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/queenpin.va"
              aria-label="Social Media Link"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
        </ul>

        <form
          name="Queenpin-Contact-Form-Home-Page"
          method="POST"
          data-netlify="true"
          className="form"
          onSubmit="submit"
        >
          <input
            type="hidden"
            name="form-name"
            value="Queenpin-Contact-Form-Home-Page"
          />
          <p className="form-section">
            <label>
              Name * <br />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </label>
          </p>

          <p className="form-section">
            <label>
              Email *<br />
              <input
                id="email-box"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </label>
          </p>

          <p className="form-section">
            <label>
              Phone Number
              <br />
              <input
                id="phone-number-box"
                type="tel"
                name="phone number"
                placeholder="Enter your phone number"
              />
            </label>
          </p>

          <p className="form-section">
            <label>
              Subject *<br />
              <input
                id="subject-box"
                type="text"
                name="subject"
                placeholder="Type the subject"
                required
              />
            </label>
          </p>

          <p className="form-section">
            <label>
              Message *<br />
              <textarea
                type="text"
                id="msg-box"
                name="message"
                placeholder="Type your message here..."
                required
              ></textarea>
            </label>
          </p>

          <p>
            <button className="form-button" type="submit">
              SUBMIT
            </button>
          </p>
        </form>
      </section>
      <div className="contact-modal display-none">
        <div className="x-out-container">
          <button className="x-out-btn" onClick={xOutFunc}>
            X
          </button>
        </div>
        <h1>Perfect Your Pinterest Today With a FREE Consultation!</h1>
        <a href="/Contact">
          <button className="get-in-touch">GET IN TOUCH</button>
        </a>
      </div>
    </div>
  );
}
