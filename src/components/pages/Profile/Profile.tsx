import { useAppSelector } from "../../../redux/store/hooks";

const Profile = () => {
  const currentUser = useAppSelector((state) => {
    return state.loadedProfile.currentUser;
  });

  return (
    <div className="p-5" style={{ height: "85vh", width: "100vw" }}>
      <h1>{currentUser !== null && currentUser.username}</h1>

      {currentUser.playlists.length === 0 ? (
        <h3>No playlists uploaded yet</h3>
      ) : (
        <h3>Uploaded playlists:</h3>
      )}
    </div>
  );
};

export default Profile;
