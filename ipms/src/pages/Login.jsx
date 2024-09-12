import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import $ from 'jquery';
import { KEYUTIL, KJUR } from 'jsrsasign'; 
import '../styles/Login.css';

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
  const [info, setInfo] = useState('');
  const [contents, setContents] = useState('');

  const clientId = "APP-5KYNG0V3YXWRKQRG";
  const orcidAuthUrl = "https://orcid.org/oauth/authorize";
  const orcidCert = {
    "kty": "RSA",
    "e": "AQAB",
    "use": "sig",
    "kid": "sandbox-orcid-org-3hpgosl3b6lapenh1ewsgdob3fawepoj",
    "n": "pl-jp-kTAGf6BZUrWIYUJTvqqMVd4iAnoLS6vve-KNV0q8TxKvMre7oi9IulDcqTuJ1alHrZAIVlgrgFn88MKirZuTqHG6LCtEsr7qGD9XyVcz64oXrb9vx4FO9tLNQxvdnIWCIwyPAYWtPMHMSSD5oEVUtVL_5IaxfCJvU-FchdHiwfxvXMWmA-i3mcEEe9zggag2vUPPIqUwbPVUFNj2hE7UsZbasuIToEMFRZqSB6juc9zv6PEUueQ5hAJCEylTkzMwyBMibrt04TmtZk2w9DfKJR91555s2ZMstX4G_su1_FqQ6p9vgcuLQ6tCtrW77tta-Rw7McF_tyPmvnhQ"
  };
  const pubKey = KEYUTIL.getKey(orcidCert);

  const getFragmentParameterByName = (name) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\#&]" + name + "=([^&#]*)"),
      results = regex.exec(window.location.hash);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  const checkSig = (idToken) => {
    return KJUR.jws.JWS.verifyJWT(idToken, pubKey, {
      alg: ['RS256'],
      iss: ["https://sandbox.orcid.org"],
      aud: clientId,
      gracePeriod: 15 * 60 
    });
  }

  useEffect(() => {
    setIsSignup(location.pathname === '/sign/signup');

    const encoded_url = encodeURIComponent("https://ipms-digital-library.vercel.app/author/dashboard");

    $(document).ready(function () {
      const id_token = getFragmentParameterByName("id_token");
      if (id_token) {
        $("#login").hide();
        if (checkSig(id_token)) {
          setInfo("SIGNATURE VERIFIED!");
          setContents(KJUR.jws.JWS.parse(id_token).payloadPP);
        } else {
          setInfo("INVALID TOKEN!");
          setContents(KJUR.jws.JWS.parse(id_token).payloadPP);
        }
      } else {
        $("#login").attr("href", `${orcidAuthUrl}?response_type=token&redirect_uri=${encoded_url}&client_id=${clientId}&scope=openid&nonce=whatever`);
      }
    });
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
              <label htmlFor="orcid">Your ORCID ID</label>
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
              <label htmlFor="affiliation">Your Affiliation</label>
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
          <label htmlFor="email">Your Email ID</label>
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
              className="button p-2 rounded-lg text-white"
            >
              {isSignup ? 'Sign up' : 'Log In'}
            </button>
          </div>
       
          <div className="button-wrapper bg-green-600 text-white text-center p-3 rounded-3xl transition-transform transform hover:scale-105 focus:scale-105 active:scale-95 mt-5">
            <a id="login" href="#">
              {!isSignup?'Login':'Sign Up'} into ORCID
            </a>
            <h3 id="info">{info}</h3>
            <p id="contents">{contents}</p>
          </div>
       
          <div className="login flex gap-5">
            <label>{isSignup ? 'Already have an account?' : "Don't have an account?"}</label>
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
