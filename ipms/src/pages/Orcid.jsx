import React, { useState, useEffect } from 'react';
// import './style.css';
import $ from 'jquery'; // Import jQuery
import { KEYUTIL, KJUR } from 'jsrsasign'; // Import necessary modules from jsrsasign

const Orchid = () => {
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
      gracePeriod: 15 * 60 // 15 mins skew allowed
    });
  }

  useEffect(() => {
    const encoded_url = encodeURIComponent("https://ipms-digital-library.vercel.app");

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
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      <a id="login">sign into ORCID</a>
      <h3 id="info">{info}</h3>
      <p id="contents">{contents}</p>
    </div>
  );
}

export default Orchid;
