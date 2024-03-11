import Profile from "./Components/Profile/Profile";
import "./App.css";
import userData from "./Components/userData.json";
import friends from "./Components/friends.json";
import FriendList from "./Components/FriendList/FriendList";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};
export default App;
