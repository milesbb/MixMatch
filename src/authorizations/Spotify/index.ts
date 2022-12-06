import { refreshUserTokens } from "../MixMatch";

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
    body: body,
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

  if (spotifyResponse.access_token)
    localStorage.setItem("spotifyAccessToken", spotifyResponse.access_token);

  if (spotifyResponse.refresh_token)
    localStorage.setItem("spotifyRefreshToken", spotifyResponse.refresh_token);

  window.history.pushState("", "", redirect_uri);

  const userData = await getSpotifyAccountInfo();

  const spotifyPlaylists = await getSpotifyPlaylists(userData);

  const spotifyUserAndPlaylists = {
    user: userData,
    playlists: spotifyPlaylists,
  };

  return spotifyUserAndPlaylists;
};

export const getSpotifyAccountInfo = async () => {
  const config = {
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("spotifyAccessToken"),
    }),
  };

  const response = await fetch("https://api.spotify.com/v1/me", config);
  const spotifyProfileData = await response.json();

  return spotifyProfileData;
};

export const getSpotifyPlaylists = async (userData: any) => {
  const config = {
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("spotifyAccessToken"),
    }),
  };

  const response = await fetch(
    "https://api.spotify.com/v1/users/" + userData.id + "/playlists",
    config
  );

  if (response.status === 401) {
    await refreshSpotifyTokens();
    const result: any = await getSpotifyPlaylists(userData);
    return result;
  } else {
    const spotifyPlaylists = await response.json();
    return spotifyPlaylists;
  }
};

export const createImportUrl = (playlistId: string, offset: number = 0) => {
  const importUrl =
    "https://api.spotify.com/v1/playlists/" +
    playlistId +
    "/tracks?offset=" +
    offset +
    "&limit=100&fields=total,offset,next,limit,href,items(track(name,artists(name),album(name,images),preview_url))";

  return importUrl;
};

export const importPlaylistToDb = async (
  tracksArray: any[],
  userId: string,
  playlistName: string
) => {
  const finalPlaylist = {
    user: userId,
    playlist: {
      tracks: [...tracksArray],
      name: playlistName.toString(),
    },
  };

  const config = {
    method: "POST",
    body: JSON.stringify(finalPlaylist),
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    }),
  };

  const response = await fetch(
    process.env.REACT_APP_BE_URL + "/playlists",
    config
  );

  if (response.status === 401) {
    await refreshUserTokens();
    await importPlaylistToDb(tracksArray, userId, playlistName)

  } else {
    const playlistId = response.json();
    console.log(playlistId);
  }
};

export const loadNextTracks = async (
  nextUrl: string,
  masterTracksArray: any[],
  totalTracks: number,
  userId: string,
  playlistName: string
) => {
  const config = {
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("spotifyAccessToken"),
    }),
  };

  const response = await fetch(nextUrl, config);
  const data = await response.json();
  masterTracksArray.push(...data.items);
  console.log(masterTracksArray);
  if (masterTracksArray.length === totalTracks) {
    importPlaylistToDb(masterTracksArray, userId, playlistName);
  }
  return data;
};

export const createTrackLoadPromise = (
  nextUrl: string,
  masterTracksArray: any[],
  totalTracks: number,
  userId: string,
  playlistName: string
) => {
  return new Promise((resolve, reject) => {
    loadNextTracks(
      nextUrl,
      masterTracksArray,
      totalTracks,
      userId,
      playlistName
    );
  });
};

export const importSpotifyPlaylist = async (
  playlistId: string,
  totalTracks: number,
  userId: string,
  playlistName: string
) => {
  let playlistTracksMaster: any[] = [];

  const config = {
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("spotifyAccessToken"),
    }),
  };

  const response = await fetch(createImportUrl(playlistId), config);

  const playlistTracks = await response.json();

  playlistTracksMaster = [...playlistTracks.items];

  const { total, limit } = playlistTracks;

  const numberOfIterationsLeft = Math.ceil(total / limit);

  console.log(
    "Number of iterations left to be done: " + numberOfIterationsLeft
  );

  console.log(playlistTracks.next);

  const promiseArray: any[] = [];

  for (let i = 0; i < numberOfIterationsLeft; i++) {
    const offsetNum = (i + 1) * 100;

    promiseArray.push(
      createTrackLoadPromise(
        createImportUrl(playlistId, offsetNum),
        playlistTracksMaster,
        totalTracks,
        userId,
        playlistName
      )
    );
  }

  console.log("finished making promises array");

  for (const elem of promiseArray) {
    let result = await elem;
  }
};

export const refreshSpotifyTokens = async () => {
  const tokenEndpoint = "https://accounts.spotify.com/api/token";
  let body =
    "grant_type=refresh_token&refresh_token=" +
    localStorage.getItem("spotifyRefreshToken") +
    "&client_id=" +
    process.env.REACT_APP_SPOTIFY_CLIENT_ID;

  const config = {
    method: "POST",
    body: body,
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

  const spotifyRefreshResp = await response.json();

  if (spotifyRefreshResp.access_token) {
    localStorage.setItem("spotifyAccessToken", spotifyRefreshResp.access_token);
  }
};
