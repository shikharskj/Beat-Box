import React, { useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";
// Component Imports
import Login from "./components/Login";
import SideBar from "./components/layout/SideBar";
import Body from "./components/layout/Body";
import Footer from "./components/layout/Footer";

//Other Imports
import { getTokenFromUrl } from "./spotify-config";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setUser } from "./redux/musicSlice";
import { BrowserRouter as Router } from "react-router-dom";
//helper library to inreract with spotify api's once we have got the access token
const spotifyApi = new SpotifyWebApi();

function App() {
  const { accessToken } = useSelector((state) => state?.data);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      dispatch(setToken(_token));

      spotifyApi.setAccessToken(_token);
      spotifyApi.getMe().then((user) => {
        dispatch(setUser({name: user.display_name, id: user.id}));
      });
    
      spotifyApi.getPlaylist("37i9dQZEVXbLZ52XmnySJg").then(
        function (data) {
          console.log("Top 50 playlist", data);
        },
        function (err) {
          console.error(err);
        }
      );


    }
  }, []);

  return (
    <div className="bg-black">
              <Router>

      {accessToken ? (
        <>
          <div className="flex relative">
            <SideBar spotifyApi={spotifyApi}/>
            <Body spotifyApi={spotifyApi}/>
          </div>
          <Footer spotifyApi={spotifyApi} />
        </>
      ) : (
        <Login />
      )}
      </Router>
    </div>
  );
}

export default App;
