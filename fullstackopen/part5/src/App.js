import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import AuthServices from "./services/auth";
import LoginForm from "./components/auth/LoginForm";
import LogoutForm from "./components/auth/LogoutForm";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    localStorage.getItem("token");
    setUser(localStorage.getItem("userData"));
  }, []);

  const handleLogin = async (username, password) => {
    const user = await AuthServices.login({ username, password });
    localStorage.setItem("token", user.token);
    localStorage.setItem("userData", JSON.stringify(user));
    setUser(user);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null)
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
      <LogoutForm user={user} handleLogout={handleLogout} />
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default App;
