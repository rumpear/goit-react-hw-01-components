import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';
import s from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul key={friends.id} className={s.list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
