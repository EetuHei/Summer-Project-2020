import React, { useState } from "react";

const Blog = ({ blog }) => {
  const [details, setDetails] = useState(false);

  // TODO:
  // get username by id and add the name of the poster in detailed view of the blog (5.7)
  // move the blogs.map from app.js to under some other component

  const buttonText = () => (details === true ? "hide" : "view");
  const allDetails = { display: details ? "" : "none" };

  let blogStyle = {
    display: "",
    marginTop: 10,
    padding: 5,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <div>
      <div style={blogStyle}>
        {blog.title}, by: {blog.author}
        <button
          style={{ marginLeft: "5px" }}
          id="view"
          onClick={() => setDetails(!details)}
        >
          {buttonText()}
        </button>
        <div style={allDetails} className="allDetails">
          <div>
            <a href="localhost:3000">{blog.url}</a>
            <div>likes:{blog.likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
