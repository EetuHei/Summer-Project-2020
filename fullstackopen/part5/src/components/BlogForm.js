import React, { useState } from "react";

const BlogForm = ({ user, handleBlogSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const changeUrl = (e) => {
    setUrl(e.target.value);
  };

  if (user) {
    return (
      <>
        <h2>Create new</h2>
        <p>
          Title: <input type="text" value={title} onChange={changeTitle} />
        </p>
        <p>
          Author:
          <input type="text" value={author} onChange={changeAuthor} />
        </p>
        <p>
          Url: <input type="text" value={url} onChange={changeUrl} />
        </p>
        <button
          type="button"
          onClick={() => handleBlogSubmit(title, author, url)}
        >
          create
        </button>
        <div></div>
      </>
    );
  }
};

export default BlogForm;
