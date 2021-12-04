import user from './source/user.json';
import friends from './source/friends.json';
import history from './source/transactions.json';

import { Profile } from './components/Profile/Profile';
import { Statistic } from './components/Statistic/Statistics';
import { FriendsList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" />
      <FriendsList lists={friends} />
      <TransactionHistory items={history} />
    </div>
  );
}
