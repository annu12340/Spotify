import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";

import { getTokenFromResponse } from "./components/Spotify";
import Login from "./components/Login";
import User from "./components/User";
import { useStateValue } from "./StateProvider";

const s = new SpotifyWebApi();

function App() {
   const [token, settoken] = useState("");
   const [{ user }, dispatch] = useStateValue();

   useEffect(() => {
      // Set token
      const hash = getTokenFromResponse();
      window.location.hash = "";
      let _token = hash.access_token;

      if (_token) {
         s.setAccessToken(_token);

         dispatch({
            type: "SET_TOKEN",
            token: _token,
          });
         s.getMe().then((user) => {
            dispatch({
               type: "SET_USER",
               user,
            });
         });
      }
   }, []);

   console.log("user", user);
   return <div className='app'>{token ? <User /> : <Login />}</div>;
}

export default App;
