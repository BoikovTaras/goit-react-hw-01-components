export const FriendsList = ({ lists }) => (
  <ul className="friend-list">
    {lists.map(list => (
      <li key={list.id} className="item">
        <span className="status">22</span>
        <img className="avatar" src={list.avatar} alt={list.name} width="48" />
        <p className="name">{list.name}</p>
      </li>
    ))}
  </ul>
);
