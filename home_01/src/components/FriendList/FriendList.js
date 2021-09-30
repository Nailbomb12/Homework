import FriendListItem from './FriendListItem'
import PropTypes from 'prop-types'
import React from 'react'
// придерживайся одинакового нейминга (лучше использовать понятные имена переменных)
import styles from './FriendList.module.css'

export default function FriendList({ friends }) {
  // Вот тут логика немного неправильная FriendList должен делать мап
  // FriendListItem должен рендерить 1 эленет списка,
  // а ты туда передаешь все элементы.

  // Я перенес FriendListItem в эту же папку, так как эти два компонента связаны (но это уже как нрав)

  return (
    <ul className={styles.frendlist}>
      {friends.map(({ id, ...restFriend }) => (
        // можно заспредить обьект, это тоже самое если передеашь вот так:
        // <FriendListItem name={friend.name} isOnline={friend.isOnline} avatar={friend.avatar} />
        <FriendListItem {...restFriend} key={id} />
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ),
}
