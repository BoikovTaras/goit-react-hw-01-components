import s from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendsList = ({ lists }) => (
  <ul className={s.friends}>
    {lists.map(list => (
      <li
        key={list.id}
        className={`${s.item} ${list.isOnline ? s.online : s.ofline}`}
      >
        <img
          className={s.avatar}
          src={list.avatar}
          alt={list.name}
          width="48"
        />
        <p className={s.name}>{list.name}</p>
      </li>
    ))}
  </ul>
);

FriendsList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
