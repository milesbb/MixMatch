import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div style={{ width: "100vw", background: "black" }}>
        <Container>
          <Row>
            <Col className="p-5">
              <div className="mb-3">
                <h4
                  className="text-white"
                  style={{ fontSize: "1rem", letterSpacing: ".1rem" }}
                >
                  MIXMATCH
                </h4>
              </div>

              <ul
                className="text-left text-white "
                style={{ listStyleType: "none", padding: 0, margin: 0 }}
              >
                <li className="text-left">Profile</li>
                <li className="text-left">Profile Settings</li>
                <li className="text-left">Dashboard</li>
                <li className="text-left">Playlists</li>
              </ul>
            </Col>
            <Col className="p-5">
              <div className="mb-3">
                <h4
                  className="text-white"
                  style={{ fontSize: "1rem", letterSpacing: ".1rem" }}
                >
                  IMPORT
                </h4>
              </div>

              <ul
                className="text-left text-white "
                style={{ listStyleType: "none", padding: 0, margin: 0 }}
              >
                <li className="text-left">Import from Spotify</li>
                <li className="text-left">Import from Apple Music</li>
                <li className="text-left">Read about MixMatch Import</li>
              </ul>
            </Col>
            <Col className="p-5">
              <div className="mb-3">
                <h4
                  className="text-white"
                  style={{ fontSize: "1rem", letterSpacing: ".1rem" }}
                >
                  EXPORT
                </h4>
              </div>

              <ul
                className="text-left text-white "
                style={{ listStyleType: "none", padding: 0, margin: 0 }}
              >
                <li className="text-left">Export to Spotify</li>
                <li className="text-left">Export to Apple Music</li>
                <li className="text-left">Read about MixMatch Export</li>
              </ul>
            </Col>
            <Col className="p-5">
              <div className="mb-3">
                <h4
                  className="text-white"
                  style={{ fontSize: "1rem", letterSpacing: ".1rem" }}
                >
                  ABOUT
                </h4>
              </div>

              <ul
                className="text-left text-white "
                style={{ listStyleType: "none", padding: 0, margin: 0 }}
              >
                <li className="text-left">About MixMatch</li>
                <li className="text-left">Github</li>
                <li className="text-left">More Projects</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{ width: "100vw", background: "#1C1E21" }}
        className="d-flex text-white p-3 px-5 justify-content-between"
      >
        <div>2022 © MixMatch</div>
        <div>Privacy & Terms</div>
      </div>
    </>
  );
};

export default Footer;
