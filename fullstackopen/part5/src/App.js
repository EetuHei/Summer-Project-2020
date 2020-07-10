import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import AuthServices from "./services/auth";
import LoginForm from "./components/auth/LoginForm";
import LogoutForm from "./components/auth/LogoutForm";
import BlogForm from "./components/BlogForm";
import Alert from "./components/Alert";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  console.log(message, "message value");

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("userData"));
    setUser(user);
  }, []);

  const handleLogin = async (username, password) => {
    const user = await AuthServices.login({ username, password });
    localStorage.setItem("token", user.token);
    localStorage.setItem("userData", JSON.stringify(user));
    setUser(user);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
  };

  const handleBlogSubmit = async (title, author, url) => {
    const submitBlog = await blogService.addNew({ title, author, url });

    if (submitBlog) {
      setMessage({ message: submitBlog, color: "green" });
      setTimeout(() => {
        setMessage(null);
      }, 5000);
      setBlogs([...blogs].concat(submitBlog));
    }
  };

  if (!user) {
    return (
      <div>
        <h2>Login in to application</h2>
        <LoginForm user={user} handleLogin={handleLogin} />
      </div>
    );
  }
  return (
    <div>
      <h2>blogs</h2>
      <Alert message={message} />
      <LogoutForm user={user} handleLogout={handleLogout} />
      <BlogForm user={user} handleBlogSubmit={handleBlogSubmit} />
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default App;
