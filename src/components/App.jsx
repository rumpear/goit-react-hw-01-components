import { Section } from './Section';

import { Profile } from './Profile';
import user from '../data/user.json';

import { Statistics } from './Statistics';
import data from '../data/data.json';

import { FriendList } from './FriendList';
import friends from '../data/friends.json';

import { TransactionHistory } from './TransactionHistory';
import transactions from '../data/transactions.json';

const App = () => (
  <Section>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </Section>
);

export default App;
