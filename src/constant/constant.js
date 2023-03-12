const baseURL = "https://accounts.spotify.com/authorize";

const clientId = "740d36320c6f4c9e89df6dd689cbefcb";
const redirectURI = "https://spotify-sable-three.vercel.app/";
const scope = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromURL = () => {
  return Object.fromEntries(
    window.location.hash
      .slice(1)
      .split("&")
      .map((e) => e.split("="))
  );
};
export const loginURL = `${baseURL}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scope.join(
  "%20"
)}&response_type=token&show_dialog=true`;
