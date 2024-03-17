import Profile from "./Components/Profile/Profile";
import "./App.css";
import userData from "./Components/userData.json";
import friends from "./Components/friends.json";
import FriendList from "./Components/FriendList/FriendList";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import transactions from "./Components/transaction.json";
import TestButton from "./Components/TestButton/TestButton";

const App = () => {
  return (
    <>
      <TestButton />
      {/* <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </>
  );
};
export default App;
