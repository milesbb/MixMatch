export const requestSpotifyAuthorization = (redirectLocation: string) => {
  const authorizeBaseUrl = "https://accounts.spotify.com/authorize";
  const redirect_uri = process.env.REACT_APP_FRONTEND_URL + redirectLocation;
  const scope =
    "playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public";

  let url =
    authorizeBaseUrl +
    "?client_id=" +
    process.env.REACT_APP_SPOTIFY_CLIENT_ID +
    "&response_type=code&redirect_uri=" +
    encodeURI(redirect_uri) +
    "&show_dialog=true&scope=" +
    scope;

  window.location.href = url;
};

export const onPageLoad = () => {
  let code: string = "";
  if (window.location.search.length === 0) return code;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.get("code") !== null) {
    code = urlParams.get("code")!;
    return code;
  }
};

export const fetchSpotifyAccessToken = async (
  code: string,
  redirectLocation: string
) => {
  const redirect_uri = process.env.REACT_APP_FRONTEND_URL + redirectLocation;
  const tokenEndpoint = "https://accounts.spotify.com/api/token";
  let body =
    "grant_type=authorization_code&code=" +
    code +
    "&redirect_uri=" +
    encodeURI(redirect_uri) +
    "&client_id=" +
    process.env.REACT_APP_SPOTIFY_CLIENT_ID +
    "&client_secret=" +
    process.env.REACT_APP_SPOTIFY_SECRET_ID;

  //   const auth = Buffer.from(
  // process.env.REACT_APP_SPOTIFY_CLIENT_ID +
  //   ":" +
  //   process.env.REACT_APP_SPOTIFY_SECRET_ID
  //   ).toString("base64");

  const config = {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        btoa(
          process.env.REACT_APP_SPOTIFY_CLIENT_ID +
            ":" +
            process.env.REACT_APP_SPOTIFY_SECRET_ID
        ),
    }),
  };

  const response = await fetch(tokenEndpoint, config);

  const spotifyResponse = await response.json();

  console.log(spotifyResponse);

  return spotifyResponse;
};
