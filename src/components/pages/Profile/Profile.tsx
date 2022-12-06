import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../../../redux/store/hooks";

const Profile = () => {
  const currentUser = useAppSelector((state) => {
    return state.loadedProfile.currentUser;
  });

  return (
    <div
      className="p-5 text-white"
      style={{ height: "60vh", width: "100vw", background: "black" }}
    >
      <Container>
        <Row>
          <Col>
            <h1>{currentUser !== null && currentUser.username}</h1>
          </Col>
          <Col>
            {currentUser.playlists.length === 0 ? (
              <h3>No playlists uploaded yet</h3>
            ) : (
              <>
                <h3>Uploaded playlists:</h3>
                <Container>
                  {currentUser.playlists.map((playlist: any, i: number) => (
                    <Row key={playlist._id}>
                      <Col>{i + 1 + ": "}</Col>
                      <Col>{playlist.playlist.name}</Col>
                    </Row>
                  ))}
                </Container>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
