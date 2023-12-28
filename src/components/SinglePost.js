import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../client";
import "../components/blogPageStyles.css";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
      title, 
      _id, 
      slug,
      publishedAt, 
      readTime,
      mainImage{
        asset->{
          _id, 
          url
        }
      }, 
      body, 
      "name": author->name,
      "authorImage":author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost)
    return (
      <div className="post-body">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <>
      <div className="post-body">
        <div className="top-bar">
          <div className="details">
            <img
              className="author-pic"
              src={urlFor(singlePost.authorImage).url()}
              alt={singlePost.name}
            />
            <div className="author">
              <p className="authorName">{singlePost.name}</p>
              <p className="time">
                {new Date(
                  Date.parse(singlePost.publishedAt)
                ).toLocaleDateString("en-us", {
                  month: "short",
                  day: "numeric",
                })}{" "}
                - {singlePost.readTime} read
              </p>
            </div>
          </div>
        </div>
        <h1>{singlePost.title}</h1>
        <div className="block-content">
          {singlePost.body.map((el, index) => (
            <BlockContent
              key={index}
              blocks={el}
              projectId={"8ab8bcjd"}
              dataset={"production"}
              imageOptions={{
                w: Number(el.size) ? Number(el.size) : 375,
              }}
            />
          ))}
        </div>
      </div>
      <div className="blog-socials">
        <Link className="socials-contact" to={"/"}>
          <button>Contact Us</button>
        </Link>
        <ul>
          <li className="share">Share:</li>
          <li>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}`}
              aria-label="Share Post on Social Media Link"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20blog%20post%20by%20Queen%20Pin:&url=${window.location}`}
              aria-label="Share Post on Social Media Link"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location}&title=${document.title}`}
              aria-label="Share Post on Social Media Link"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href={"/"}
              className="clipBoardLink"
              title="Copy to clipboard"
              aria-label="Share Post on Social Media Link"
            >
              <i className="fa-solid fa-paperclip"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
