import style from './Profile.module.css';
export default function Profile({ name, tag, location, image, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={style.card}>
      <div className={style.user}>
        <img className={style.avatar} src={image} alt="User avatar" />
        <p className={style.username}>{name}</p>
        <p className={style.userTag}>{tag}</p>
        <p className={style.userLocation}>{location}</p>
      </div>

      <ul className={style.list}>
        <li className={style.listItem}>
          <span>Followers</span>
          <span className={style.listStat}>{followers}</span>
        </li>

        <li className={style.listItem}>
          <span>Views</span>
          <span className={style.listStat}>{views}</span>
        </li>

        <li className={style.listItem}>
          <span>Likes</span>
          <span className={style.listStat}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
