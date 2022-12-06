import { Button, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { logoutUser } from "../../authorizations/MixMatch";
import { CLEAR_USER } from "../../redux/actions/profileActions";

const NavbarComponent = () => {
  const currentUser = useAppSelector((state) => {
    return state.loadedProfile.currentUser;
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const logout = async () => {
    await logoutUser();
    dispatch({type: CLEAR_USER})
    navigate("/");
  };

  return (
    <Navbar style={{ background: "#595959" }} className="px-4" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <Image
            style={{ width: "5rem" }}
            src="https://res.cloudinary.com/dlskdxln3/image/upload/v1670266477/MixMatch/titletransp_aulmxn.gif"
          />
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
          <div className="ml-auto">
            <NavDropdown
              className="text-white"
              title={currentUser.username}
              id="basic-nav-dropdown"
            >
              <div className="ml-3">
                <NavDropdown.Item to="/profile">Settings</NavDropdown.Item>
              </div>
              <NavDropdown.Item>
                <Button
                  onClick={logout}
                  variant="danger"
                >
                  Logout
                </Button>
              </NavDropdown.Item>
            </NavDropdown>{" "}
          </div>
        </>
      )}
    </Navbar>
  );
};

export default NavbarComponent;
