import user from './source/user.json';
import friends from './source/friends.json';
import history from './source/transactions.json';

import { Profile } from './components/Profile';
import { Statistic } from './components/Statistics';
import { FriendsList } from './components/FriendList';
import { TransactionHistory } from './components/TransactionHistory';

export default function App() {
                      return (
                                            <div>
                                                                  <Profile
                                                                                        {...user}
                                                                  />
                                                                  <Statistic title="Upload stats" />
                                                                  <FriendsList
                                                                                        lists={
                                                                                                              friends
                                                                                        }
                                                                  />
                                                                  <TransactionHistory
                                                                                        items={
                                                                                                              history
                                                                                        }
                                                                  />
                                            </div>
                      );
}
