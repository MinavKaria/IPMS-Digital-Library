import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import "../styles/Login.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    orcid: "",
    name: "",
    affiliation: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const location = useLocation();
  const [isSignup, setIsSignup] = useState(location.pathname === '/sign/signup');

  useEffect(() => {
    setIsSignup(location.pathname === '/sign/signup');
  }, [location]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full my-bg font-saira flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="container mx-auto flex flex-col gap-10 bg-white opacity-85 w-2/5 rounded-3xl p-16 m-5"
      >
        <div className="w-full flex justify-center text-5xl">
          <h1 className="">{isSignup ? 'Sign up' : 'Log In'}</h1>
        </div>
        {isSignup && (
          <>
            <div className="input flex flex-col">
              <label htmlFor="orcid">Your Orchid ID</label>
              <input
                placeholder="0000-0000-0000-0000"
                type="text"
                id="orcid"
                className="form-control border-2 border-gray-400 rounded-md p-2"
                required
                value={formData.orcid}
                onChange={handleChange}
              />
            </div>
            <div className="input flex flex-col">
              <label htmlFor="name">Your Name</label>
              <input
                placeholder="Name"
                type="text"
                id="name"
                className="form-control border-2 border-gray-400 rounded-md p-2"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input flex flex-col">
              <label htmlFor="affiliation">Your affiliation</label>
              <input
                placeholder="Affiliation"
                type="text"
                id="affiliation"
                className="form-control border-2 border-gray-400 rounded-md p-2"
                required
                value={formData.affiliation}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        <div className="input flex flex-col">
          <label htmlFor="email">Your Email id</label>
          <input
            placeholder="xyz@gmail.com"
            type="email"
            id="email"
            className="form-control border-2 border-gray-400 rounded-md p-2"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            className="form-control border-2 border-gray-400 rounded-md p-2"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {isSignup && (
          <div className="input flex flex-col">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              placeholder="Confirm Password"
              type="password"
              id="confirmPassword"
              className="form-control border-2 border-gray-400 rounded-md p-2"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <div className="button-wrapper bg-gray-600 text-white text-center p-3 rounded-3xl transition-transform transform hover:scale-105 focus:scale-105 active:scale-95">
            <button
              type="submit"
              className="button  p-2 rounded-lg text-white"
            >
              {isSignup ? 'Sign up' : 'Log In'}
            </button>
          </div>
          <div className="login flex gap-5">
            <label>{isSignup ? 'Already have an Account?' : "Don't have an account ?"}</label>
            <Link to={isSignup ? "/sign/login" : "/sign/signup"} className="text-blue-500">
              {isSignup ? 'Log In' : 'Sign up'}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
