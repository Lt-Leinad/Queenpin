import React, { useState, useEffect } from "react";
import client from "../client";
import { Link } from "react-router-dom";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
        title, 
        slug, 
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
    <div>
      <h2>Blog Posts</h2>
      <h3>Welcome to my blog posts page!</h3>
      <div>
        {postData &&
          postData.map((post, index) => (
            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <img src={post.mainImage.asset.url} alt="" />
                <span>
                  <h2>{post.title}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
