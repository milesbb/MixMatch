import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      className="p-5 text-white"
      style={{
        height: "85vh",
        width: "100vw",
        background: "black",
        backgroundImage:
          "url('https://res.cloudinary.com/dlskdxln3/image/upload/v1670267507/MixMatch/backgif_wr5w8x.gif')",
      }}
    >
      <h1>
        <i>Dash</i>board
      </h1>
      <Container className="my-5">
        <Row>
          <Col>
            <Card style={{ width: "18rem", background: "gray" }}>
              <Card.Img
                height="155"
                variant="top"
                src="https://res.cloudinary.com/dlskdxln3/image/upload/v1670269754/MixMatch/spotify_q7lhqs.png"
              />
              <ListGroup className="list-group-flush">
                <ListGroupItem className="bg-dark text-white">
                  <Link to="/import" className="nav-link">
                    Import Spotify Playlist to MixMatch
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-cloud-download my-3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                      <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                    </svg>
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="bg-dark text-white">
                  <Link to="/export" className="nav-link">
                    <div>Export MixMatch Playlist to Spotify</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-cloud-upload my-3"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                        />
                      </svg>
                    </div>
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", background: "gray" }}>
              <Card.Img
                height="155"
                variant="top"
                src="https://res.cloudinary.com/dlskdxln3/image/upload/v1670269748/MixMatch/applemusic_phsd9r.webp"
              />
              <ListGroup className="list-group-flush">
                <ListGroupItem className="bg-dark text-white">
                  <Link to="/import" className="nav-link">
                    <div>Import Apple Music Playlist to MixMatch</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-cloud-download my-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                        <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                      </svg>
                    </div>
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="bg-dark text-white">
                  <Link to="/export" className="nav-link">
                    <div>Export MixMatch Playlist to Apple Music</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-cloud-upload my-3"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                        />
                      </svg>
                    </div>
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", background: "gray" }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dlskdxln3/image/upload/v1670267507/MixMatch/backgif_wr5w8x.gif"
              />
              <ListGroup className="list-group-flush">
                <ListGroupItem className="bg-dark text-white">
                  <Link to="/profile" className="nav-link">
                    Visit your profile
                  </Link>
                </ListGroupItem>

              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", background: "gray" }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dlskdxln3/image/upload/v1670269754/MixMatch/spotify_q7lhqs.png"
              />
              <ListGroup className="list-group-flush">
                <ListGroupItem className="bg-dark text-white">
                  <Link to="/import" className="nav-link">
                    PLACEHOLDER
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="bg-dark text-white">
                  <Link to="/export" className="nav-link">
                    PLACEHOLDER
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
