import "../components/Testimonials.css";
import React, { useState, useEffect } from "react";
import client from "../client";

export default function Testimonial() {
  const [testimonyData, setTestimonials] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "testimonials"]{
        client, 
        testimony
    }`
      )
      .then((data) => {
        setTestimonials(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="testimonials-body">
      <section className="section1">
        <div className="banner">Testimonials</div>
        <h1>My Clients Say It Best...</h1>
        <div className="banner-overlay"></div>
      </section>
      <section className="section2">
        {testimonyData &&
          testimonyData.map((post, index) => (
            <div className="testimony" key={index}>
              <p>"{post.testimony}"</p>
              <p>— {post.client}</p>
            </div>
          ))}
      </section>
      <section className="section3">
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
          <img src="/images/Home_s3_img.webp" alt="Blog Post Thumbnail" />
        </div>
      </section>
    </div>
  );
}
