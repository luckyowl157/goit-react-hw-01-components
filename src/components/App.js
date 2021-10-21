import ReactDOM from 'react-dom';

// Profile
import Profile from './Profile/Profile';
import userJson from './Profile/user.json';

// Statistic
import Statistics from './Statistics/Statistics';
import statList from './Statistics/statistical-data.json';

// Friends
import FriendList from './FriendsList/FrinedList';
import friendsJson from './FriendsList/friends.json'

// Transactions
import TransactionHistory from './Transactions/Transactions';
import transactions from './Transactions/transactions.json';



let App = () => {
    return (
        <div>
            <section className="container">
                <Profile 
                    avatar={userJson.avatar}
                    name={userJson.name}
                    tag={userJson.tag}
                    location={userJson.location}
                    stats={userJson.stats}
                />
            </section>
            <hr />
            <section>
                <Statistics title="Upload stats" stats={statList} />
            </section>
            <hr />
            <section className="friendsList">
                <FriendList 
                    friends={friendsJson}
                />
            </section>
            <hr />
            <section>
                <TransactionHistory items={transactions}/>
            </section>
            <hr />
        </div>
    )
};
export default App;
