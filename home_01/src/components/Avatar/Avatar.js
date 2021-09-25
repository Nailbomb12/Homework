import React from 'react'
import styles from './Avatar.module.css'

// Можно сократить немного код (мне так больше нрав, но это такое)
export default ({ avatar }) => (
  <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
)
