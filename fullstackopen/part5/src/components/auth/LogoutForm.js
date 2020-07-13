import React from "react";

const LogoutForm = ({ user, handleLogout }) => {
  if (user) {
    return (
      <>
        <p>
          {`${user.name} logged in.`}
          <button type="button" onClick={() => handleLogout()}>
            Logout
          </button>
        </p>
      </>
    );
  }
};

export default LogoutForm;
