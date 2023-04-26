import React from "react";

export const AdminLogin = (props: any) => {
  const { setAuthenticated } = props;

  const handleLogin = (e: any) => {
    e.preventDefault();
    setAuthenticated(true);
  };
  return (
    <>
      <form className="login-form">
        <h2>Login</h2>
        <input type="password"/>
        <button onClick={(e) => handleLogin(e)}>Login</button>
      </form>
    </>
  );
};
