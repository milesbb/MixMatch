import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {
    fetchSpotifyAccessToken,
  onPageLoad,
  requestSpotifyAuthorization,
} from "../../../authorizations/Spotify";

const ImportPlaylist = () => {
  const [code, setCode] = useState("");

  useEffect(() => {
    let tempCode = onPageLoad()!;
    console.log(tempCode)
    setCode(tempCode);

    let response = fetchSpotifyAccessToken(tempCode, "/import")
  }, []);

  return (
    <div
      className="p-5"
      style={{
        height: "65vh",
        width: "100vw",
        backgroundImage:
          "url('https://res.cloudinary.com/dlskdxln3/image/upload/v1670267507/MixMatch/backgif_wr5w8x.gif')",
      }}
    >
      <h1 className="text-white mb-5">Import Playlist</h1>
      <Button onClick={() => requestSpotifyAuthorization("/import")}>
        Link with spotify
      </Button>
    </div>
  );
};

export default ImportPlaylist;
