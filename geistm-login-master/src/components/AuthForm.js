import React from 'react';

const AuthForm = ({ handleChange, handleSubmit, email, password, errors }) => {
  return (
    <div id="login-card">
      <h1>Login to Your Account</h1>
      {errors.length ? (
        <div id="errors">
          <p>Oops, there was an issue signing in:</p>
          <ul>
            {errors.map((error, i) => {
              return <li key={i}>{error}</li>;
            })}
          </ul>
        </div>
      ) : null}
      <form onSubmit={handleSubmit} noValidate id="auth-form">
        <input
          type="email"
          name="email"
          value={email}
          className="input"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          className="input"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit" id="signin-btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
