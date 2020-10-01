import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';

export const userContext = React.createContext({ user: {}, setUser: () => {} });

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <div className="App">
      <userContext.Provider value={{ user, setUser }}>
        {user.success && <Route to="/profile" component={Profile} />}
        <Route to="/" component={Login} />
      </userContext.Provider>
    </div>
  );
}

export default App;
