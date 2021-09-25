import React from "react"
import styles from "./Avatar.module.css"

export default function Avatar({ avatar }) {
  return (
    <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
  )
}
