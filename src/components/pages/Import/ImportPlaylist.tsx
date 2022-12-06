import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  fetchSpotifyAccessToken,
  importSpotifyPlaylist,
  onPageLoad,
  requestSpotifyAuthorization,
} from "../../../authorizations/Spotify";
import { useAppSelector } from "../../../redux/store/hooks";

interface spotifyData {
  user: any;
  playlists: any;
}

const ImportPlaylist = () => {
  const [spotifyData, setSpotifyData] = useState<spotifyData | null>(null);

  const currentUser = useAppSelector((state) => {
    return state.loadedProfile.currentUser;
  });

  useEffect(() => {
    getSpotifyData();
    console.log(spotifyData);
  }, []);

  const getSpotifyData = async () => {
    if (localStorage.getItem("spotifyCode")) {
      let response = await fetchSpotifyAccessToken(
        localStorage.getItem("spotifyCode")!,
        "/import"
      );
      console.log(response);
      setSpotifyData(response);
    } else {
      let tempCode = onPageLoad()!;
      console.log(tempCode);
      if (tempCode !== "") {
        localStorage.setItem("spotifyCode", tempCode);
        let response = await fetchSpotifyAccessToken(tempCode, "/import");
        console.log(response);
        setSpotifyData(response);
      }
    }
  };

  return (
    <div
      className="p-5"
      style={{
        height: "80vh",
        width: "100vw",
        backgroundImage:
          "url('https://res.cloudinary.com/dlskdxln3/image/upload/v1670267507/MixMatch/backgif_wr5w8x.gif')",
      }}
    >
      <h1 className="text-white mb-5">Import Playlist</h1>
      {localStorage.getItem("spotifyAccessToken") && spotifyData ? (
        <>
          {spotifyData.playlists.next && (
            <div className="text-white">
              <p>{spotifyData.playlists.total + " playlists found"}</p>
            </div>
          )}
          <Container
            style={{
              boxShadow: "inset 5px 5px 15px 5px rgba(0,0,0,0.23)",
              borderRadius: "30px",
              height: "60vh",
              background: "black",
              opacity: 0.75,
            }}
            className="overflow-auto text-white "
          >
            {spotifyData.playlists.items.length === 0 ? (
              <p className="pt-5 text-white">
                No playlists found on profile...
              </p>
            ) : (
              <>
                {spotifyData.playlists.items.map((playlist: any) => (
                  <div key={playlist.id}>
                    <Row className="my-4">
                      <Col>
                        <Image
                          style={{ borderRadius: "500px", height: "5rem" }}
                          src={playlist.images[0].url}
                        />
                      </Col>
                      <Col className="my-4">{playlist.name}</Col>
                      <Col className="my-4">
                        {playlist.tracks.total + " tracks"}
                      </Col>
                      <Col>
                        <Button
                          className="mt-3"
                          onClick={() => {
                            importSpotifyPlaylist(
                              playlist.id,
                              playlist.tracks.total,
                              currentUser._id,
                              playlist.name
                            );
                          }}
                        >
                          Import
                        </Button>
                      </Col>
                    </Row>{" "}
                    <hr></hr>
                  </div>
                ))}
              </>
            )}
          </Container>
        </>
      ) : (
        <Button onClick={() => requestSpotifyAuthorization("/import")}>
          Link with spotify
        </Button>
      )}
    </div>
  );
};

export default ImportPlaylist;
