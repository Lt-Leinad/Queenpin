import React, { useEffect, useState } from "react";
import client from "../client";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{
      title, 
      date, 
      place, 
      description,
      projectType, 
      link, 
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Project Page</h1>
      <p>hey</p>
      {projectData &&
        projectData.map((project, index) => (
          <div key={index}>
            <h1>{project.title}</h1>
          </div>
        ))}
    </div>
  );
}
