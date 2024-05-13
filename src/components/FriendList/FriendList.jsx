import FriendListItem from '../FriendListItem/FriendListItem';
import style from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}
