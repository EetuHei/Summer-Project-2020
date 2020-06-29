import React from "react";
const Notification = ({ message, errorMessage, style }) => {
  return (
    <>
      {message === null ? "" : <h2 className={style.success}>{message}</h2>}
      {errorMessage === null ? (
        ""
      ) : (
        <h2 className={style.error}>{errorMessage}</h2>
      )}
    </>
  );
};

export default Notification;
