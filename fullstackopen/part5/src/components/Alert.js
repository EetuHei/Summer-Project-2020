import React from "react";

const Alert = ({ message }) => {
  if (message === null) {
    return null;
  }
  const alertStyle = {
    color: message.color,
    background: "lightGrey",
    fontSize: "26px",
    borderStyle: "solid",
    borderRadius: "1px",
    padding: "10px",
    marginBottom: "10px",
  };
  return (
    <>
      {message.message.title ? (
        <h3 style={alertStyle}>
          a new blog: {message.message.title} by {message.message.author}
        </h3>
      ) : (
        <h3 style={alertStyle}>{message.message}</h3>
      )}
    </>
  );
};

export default Alert;
