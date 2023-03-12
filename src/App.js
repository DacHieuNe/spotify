import { useContext, useEffect, useReducer, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./assets/styles/_global.scss";
import Login from "./components/Login/Login";
import { getTokenFromURL } from "constant/constant";
import Player from "components/Login/Player/Player";
import { SpotifyContext } from "Context/SpotifyContext";

var spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();
  const [state, dispatch] = useContext(SpotifyContext);
  useEffect(() => {
    dispatch({
      type: "SET_TOKEN",
      payload:
        "BQDH_ylQv_Vee093KPJJU27lykH9wHV9JFuDVXB2DJyeB746oChanbiLbbG7ecC9lNVSFhe2hxB8UVddDy89kYa5_7t1Ze7TYChJ8-g0hteuGNvNYD61M3SW-FcNgiqWWJgM0ORo1QraXiuOqaQtDaSzCdGN-yMKbQLQALVFrlWqGkRxqK3QfaIpSZDYKDu9rKrRZWTo9pGDzBU7D36dQg      ",
    });
    const { access_token } = getTokenFromURL();
    if (access_token) {
      window.location.hash = "";

      setToken(access_token);
      spotify.setAccessToken(access_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          payload: user,
        });
      });
      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLIST",
          payload: playlist,
        });
      });
      spotify.getPlaylist("43tLlJt8g8ETtd4IohkruF").then((response) => {
        dispatch({
          type: "SET_DISCOVERY_WEEKLY",
          payload: response,
        });
      });
    }
  }, []);
  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
