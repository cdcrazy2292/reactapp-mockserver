import React, { useContext } from 'react';
import { userContext } from '../App';
import Logout from './Logout';
import formatPhone from '../utility/formatPhone';

const Profile = () => {
  const { user } = useContext(userContext);
  const { bio, email, name, position, phone } = user.user;
  const formattedPhone = formatPhone(phone);

  return (
    <div id="profile">
      <div id="side-rail"></div>
      <div id="pf-header">
        <h1>
          Welcome back, {name.first} {name.last}!
        </h1>
        <Logout />
      </div>

      <div id="pf-body">
        <div id="user-info">
          <ul>
            <li>
              <span>Full Name:</span> {name.first} {name.last}
            </li>
            <li>
              <span>Phone:</span> {formattedPhone}
            </li>
            <li>
              <span>Email:</span> {email}
            </li>
            <li>
              <span>Position:</span> {position}
            </li>
          </ul>
        </div>
        <div id="user-bio">
          <h3>About Me:</h3>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
