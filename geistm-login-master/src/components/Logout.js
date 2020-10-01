import React, { useContext } from 'react';
import { userContext } from '../App';

const Logout = () => {
  const { setUser } = useContext(userContext);

  const logout = () => {
    localStorage.clear();
    setUser({});
  };

  return (
    <button onClick={logout} id="logout-btn">
      Logout
    </button>
  );
};

export default Logout;
