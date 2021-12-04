import s from './Profile.module.css';
export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={s.profile}>
    <div className={s.avatar}>
      <img src={avatar} alt={username} className={s.avatarImage} />
    </div>
    <div>
      <p className={s.name}>{username}</p>
      <p className={s.tag}>@ {tag}</p>
      <p className={s.location}>{location}</p>
    </div>

    <ul className={s.stats}>
      <li className={s.statsIcon}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li className={s.statsIcon}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li className={s.statsIcon}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);
