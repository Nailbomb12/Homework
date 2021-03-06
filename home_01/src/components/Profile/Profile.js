import Avatar from '../Avatar/Avatar'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Profile.module.css'

// Обычно переменную называют props, а не prop
// деструктуризацию можно делать в аргументах
const Profile = ({ name, tag, location, stats, avatar }) => {
  const { followers, views, likes } = stats

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <Avatar avatar={avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}> {followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}> {views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
}

export default Profile
