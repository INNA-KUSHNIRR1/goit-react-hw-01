import style from './FriendListItem.module.css';
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={style.listItem}>
      <img className={style.image} src={avatar} alt={name} width="48"></img>
      <p className={style.title}>{name}</p>
      {isOnline ? (
        <p className={style.Online}>Online</p>
      ) : (
        <p className={style.Offline}>Offline</p>
      )}
    </div>
  );
}
