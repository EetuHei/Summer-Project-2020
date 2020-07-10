import React from "react";

const LogoutForm = ({ user, handleLogout }) => {
  if (user) {
    return (
      <>
        {" "}
        {`${user.name} logged in.`}{" "}
        <button type="button" onClick={() => handleLogout()}>
          Logout
        </button>
      </>
    );
  }
};

export default LogoutForm;
