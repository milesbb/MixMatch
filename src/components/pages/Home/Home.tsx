import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/hooks";

const Home = () => {
  const currentUser = useAppSelector((state) => {
    return state.loadedProfile.currentUser;
  });

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
      <div className="d-flex mt-5">
        <Image
          className="mx-auto"
          style={{ width: "50rem" }}
          src="https://res.cloudinary.com/dlskdxln3/image/upload/v1670267731/MixMatch/switchytitle_vyaqer.gif"
          alt="MixMatch logo gif"
        />
        <div className="position-relative">
          <div
            className="position-absolute text-white"
            style={{ bottom: "-10%", right: "35%" }}
          >
            START MIXING
          </div>
          <div>
            <Link to={currentUser === null ? "/login" : "/dashboard"}>
              <Image src="https://res.cloudinary.com/dlskdxln3/image/upload/v1670267054/MixMatch/AntiqueWellgroomedAlaskanhusky-size_restricted_epb0dj.gif" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
