import React, { useState, useReducer, useContext } from 'react';
import AuthForm from './AuthForm';
import { Redirect } from 'react-router-dom';
import { userContext } from '../App';
import axios from 'axios';
import validateForm from '../utility/validateForm';

const Login = () => {
  const { user, setUser } = useContext(userContext);
  const [errors, setErrors] = useState([]);
  const [loginCredentials, setLoginCredentials] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: '',
      password: '',
    }
  );

  const handleChange = (e) => {
    const input = e.target.name;
    const value = e.target.value;
    setLoginCredentials({ [input]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const github = 'connielok';
    const errors = validateForm(email, password);
    if (!errors.length) {
      try {
        // const { data } = await axios.post('ENDPOINT PLACEHOLDER', {
        //   email,
        //   password,
        //   github,
        // });
        const data = {
          errors: [],
          success: true,
          user: {
            bio:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Urna neque viverra justo nec. Vulputate ut pharetra sit amet aliquam id. Duis ultricies lacus sed turpis. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Iaculis urna id volutpat lacus laoreet. Vitae semper quis lectus nulla at volutpat diam. Tincidunt augue interdum velit euismod in pellentesque. Elementum pulvinar etiam non quam lacus suspendisse. Eget magna fermentum iaculis eu.',
            email: 'thisCouldBeYou@geistm.com',
            id: 42,
            location: {
              country: 'USA',
              state: 'NY',
              city: 'New York',
            },
            name: {
              first: 'John',
              last: 'Smith',
            },
            phone: '1234567890',
            position: 'Software Engineer',
            tagline:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
          },
        };
        if (data.success) {
          localStorage.setItem('user', JSON.stringify(data));
          setUser(data);
          setLoginCredentials({ email: '', password: '' });
          setErrors([]);
        } else if (data.errors.length) {
          setErrors(data.errors);
        }
      } catch (error) {
        setErrors(error);
      }
    } else {
      setErrors(errors);
    }
  };

  return user.success ? (
    <Redirect to="/profile" />
  ) : (
    <div id="login">
      <AuthForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        {...loginCredentials}
        errors={errors}
      />
    </div>
  );
};

export default Login;
