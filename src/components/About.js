import React from "react";
import "../components/About.css";

export default function About() {
  (function scrollUp() {
    window.scrollTo(0, 0);
  })();
  return (
    <div className="about-body">
      <img src="/images/Dev_Profile.webp" alt="Devorah Gurevich" />
      <div className="text">
        <h1>Hi, I'm Devorah!</h1>
        <p>
          I started Queen Pin knowing that many businesses were dedicated to
          their online presence while missing out on a highly valuable platform
          - Pinterest! So I had the desire to share my passion and experience to
          help entrepreneurs grow their businesses. So, I started my Pinterest
          management services dedicated to helping businesses grow website
          traffic, sales, and brand recognition. As an avid Pinterest user
          myself, together with my training and expertise as a Pinterest
          manager, I have a unique insight into what attracts users from a pin
          to a website. I utilize this to create standout designs and effective
          management strategies. <br />I can't wait to perfect your Pinterest!
        </p>
      </div>
    </div>
  );
}
