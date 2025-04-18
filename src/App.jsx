import React from "react";
import userData from "./userData.json";
import Profile from "./components/profile/Profile";
import friends from "./friends.json";
import transactions from "./transactions.json";
import FriendList from "./components/friends/FriendList";
import TransactionHistory from "./components/transactions/TransactionHistory";

const App = () => {
    return (
        <div className="App">
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>
    );
};

export default App;
