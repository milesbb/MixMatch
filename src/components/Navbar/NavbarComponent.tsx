import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../redux/store/hooks";

const NavbarComponent = () => {
  const currentUser = useAppSelector((state) => {
    return state.loadedProfile.currentUser;
  });

  const navigate = useNavigate();

  return (
    <Navbar style={{ background: "#595959" }} className="px-4" expand="lg">
      <Navbar.Brand>
        <Link to="/">
        <Image style={{width: "5rem"}} src="https://res.cloudinary.com/dlskdxln3/image/upload/v1670266477/MixMatch/titletransp_aulmxn.gif" />
        </Link>
      </Navbar.Brand>

      <Link to="/dashboard" className="nav-link text-white mx-3">
        Dashboard
      </Link>

      {currentUser === null ? (
        <div className="ml-auto">
          <Link to="/login" className=" nav-link text-white">
            Login/Sign Up
          </Link>
        </div>
      ) : (
        <>
          <Link to="/profile" className="nav-link text-white mx-3">
            Profile
          </Link>
          <Link to="/import" className="nav-link text-white mx-3">
            Import Playlist
          </Link>
          <Link to="/export" className="nav-link text-white mx-3">
            Export Playlist
          </Link>
          <div className="ml-auto">
            <NavDropdown
              className="text-white"
              title={currentUser.username}
              id="basic-nav-dropdown"
            >
              <div className="ml-3">
                <NavDropdown.Item to="/profile">Settings</NavDropdown.Item>
              </div>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>{" "}
          </div>
        </>
      )}
    </Navbar>
  );
};

export default NavbarComponent;
