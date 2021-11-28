import logo from './logo.svg';
import './App.css';

import { Profile } from './Profile';
import user from './source/user.json';

import { Statistic } from './Statistics';
import data from './source/data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        /> */}
        <Statistic title="Upload stats" />
        <Statistic />
      </header>
    </div>
  );
}

export default App;
