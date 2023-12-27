import React, { useState, useEffect } from "react";
import client from "../client";
import "../components/blogPageStyles.css";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
        title, 
        slug,
        snippet,
        author,
        "authorImage":author->image, 
        mainImage{
            asset->{
                _id, 
                url
            }, 
            alt
        }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <div className="body">
      {postData &&
        postData.map((post, index) => (
          <Link to={"/post/" + post.slug.current} key={post.slug.current}>
            <div className="thumbnail" key={index}>
              <img
                className="thumbnail-pic"
                src={post.mainImage.asset.url}
                alt={post.title}
              />
              <div className="text">
                <div className="details">
                  <img
                    className="profile-img"
                    src={urlFor(post.authorImage).url()}
                    alt="Author"
                  />
                  <div className="credits">
                    <p className="author">Devorah Gurevich</p>
                    <p className="times">Sep 28 - 2 min read</p>
                  </div>
                </div>
              </div>
              <h1 className="title">{post.title}</h1>
              <p className="snippet">{post.snippet}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
