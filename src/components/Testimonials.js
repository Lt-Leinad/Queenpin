import React from "react";
import "../components/Testimonials.css";

export default function Testimonials() {
  return (
    <div class="testimonials-body">
      <section class="section1">
        <div class="banner">Testimonials</div>
        <h1>My Clients Say It Best...</h1>
        <div class="banner-overlay"></div>
      </section>
      <section class="section2">
        <div class="testimony">
          <p>
            "I absolutely LOVE working with Devorah! As a full-time food
            blogger, photographer, and influencer - it’s been impossible for me
            to keep up with Pinterest. I basically had no Pinterest presence
            before Devorah, but she’s completely turned that around! Her work
            has greatly increased blog views, and overall boosted our brand
            awareness. Devorah has also just been such a joy to work with! She’s
            organized, thoughtful, creative, and truly goes above and beyond.
            I’m so lucky to have her on my team!""
          </p>
          <p>
            — Samantha Guarnieri, Founder of <em>Sam Does Her Best</em>
          </p>
        </div>

        <div class="testimony">
          <p>
            "Even as a full-time blogger + influencer, it's been difficult
            keeping up with so many different platforms while also creating
            meaningful, quality content. I've always known the power of
            Pinterest, but I didn't have the time or knowledge to best utilize
            it. Working with Devorah has been such a game-changer for me. She is
            incredibly knowledgeable about Pinterest, extremely efficient, and
            easy to communicate with. When we first began working together she
            provided a very clear understanding of the benefits of utilizing
            Pinterest, as well as exactly what services she would provide, and
            she has delivered on all fronts. I look forward to her monthly
            reports so I can see how much growth has occurred! I love working
            with Devorah and would highly recommend her services."
          </p>
          <p>— Gracie Gordon, Founder of Hungry Blonde</p>
        </div>
        <div class="testimony">
          <p>
            "We loved working with Devorah to help grow our Pinterest. Devorah
            designed pins for us, took the reins on scheduling, and completed a
            Pinterest ‘audit’ to help us level up our Pinterest game. We’d
            highly recommend working with her!"
          </p>
          <p>— Hannah Singleton, Co-Founder of Healthy Luxe</p>
        </div>
      </section>
      <section class="section3">
        <div class="section3-content">
          <div class="section3-content-left">
            <h1>
              FROM <br />
              THE <br />
              <span>BLOG</span>
            </h1>
            <a href="/blog/blogposts/Pinterest%20Management-%20Boosting%20Blog%20Success%20for%20Food%20Bloggers%20-%20A%20Case%20Study/">
              <button>READ MORE</button>
            </a>
          </div>
          <img src="/images/Home_s3_img.webp" alt="section3 image" />
        </div>
      </section>
    </div>
  );
}
