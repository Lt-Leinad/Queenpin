import React, { useState, useEffect, useRef } from "react";
import client from "../client";
import "../components/blogPageStyles.css";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

let constPostData;
export default function Post() {
  const [postData, setPost] = useState(null);
  const searchBarInput = useRef();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
        title, 
        slug,
        snippet,
        publishedAt, 
        readTime,
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
      .then((data) => {
        constPostData = data;
        setPost(
          data.sort(
            (a, b) =>
              new Date(a.publishedAt).getMonth() -
              new Date(b.publishedAt).getMonth()
          )
        );
      })
      .catch(console.error);
  }, []);

  const searchFunc = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
    setPost(
      constPostData.filter(
        (x) =>
          x.title
            .toUpperCase()
            .includes(searchBarInput.current.value.toUpperCase()) ||
          x.snippet
            .toUpperCase()
            .includes(searchBarInput.current.value.toUpperCase())
      )
    );
  };

  return (
    <div className="body">
      <form className="searchBar">
        <input
          ref={searchBarInput}
          onChange={searchFunc}
          onKeyDown={searchFunc}
          className="searchBarInput"
          type="text"
          placeholder="Search"
        ></input>
      </form>
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
                    <p className="times">
                      {new Date(
                        Date.parse(post.publishedAt)
                      ).toLocaleDateString("en-us", {
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      - {post.readTime} read
                    </p>
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
