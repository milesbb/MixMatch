import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store/hooks";

const Footer = () => {
  const currentUser = useAppSelector((state) => {
    return state.loadedProfile.currentUser;
  });

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
                <li className="text-left">
                  <Link
                    className="nav-link"
                    to={currentUser === null ? "/login" : "/profile"}
                  >
                    Profile
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="nav-link"
                    to={currentUser === null ? "/login" : "/profile"}
                  >
                    Profile Settings
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="nav-link"
                    to={currentUser === null ? "/login" : "/dashboard"}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="nav-link"
                    to={currentUser === null ? "/login" : "/profile"}
                  >
                    Playlists
                  </Link>
                </li>
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
                <li className="text-left">
                  <Link
                    className="nav-link"
                    to={currentUser === null ? "/login" : "/import"}
                  >
                    Import from Spotify
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="nav-link"
                    to={currentUser === null ? "/login" : "/import"}
                  >
                    Import from Apple Music
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="nav-link"
                    to={currentUser === null ? "/login" : "/import"}
                  >
                    Read about MixMatch Import
                  </Link>
                </li>
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
                <li className="text-left">
                  <Link
                    className="nav-link"
                    to={currentUser === null ? "/login" : "/export"}
                  >
                    Export to Spotify
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="nav-link"
                    to={currentUser === null ? "/login" : "/export"}
                  >
                    Export to Apple Music
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="nav-link"
                    to={currentUser === null ? "/login" : "/export"}
                  >
                    Read about MixMatch Export
                  </Link>
                </li>
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
                <li className="text-left">
                  <a
                    className="nav-link"
                    href="https://github.com/milesbb/MixMatch#mixmatch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About MixMatch
                  </a>
                </li>
                <li className="text-left">
                  <a
                    className="nav-link"
                    href="https://github.com/milesbb/MixMatch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li className="text-left">
                  <a
                    className="nav-link"
                    href="https://milesbb.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More Projects
                  </a>
                </li>
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
