import React from "react";
import Style from "../index.module.css";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className={Style.error}>{message}</div>;
};

export default Notification;
