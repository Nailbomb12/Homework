import React from "react"
import s from "../FriendList/FriendList.module.css"

export default function FriendListItem({ friends }) {
  return (
    <>
      {friends.map((item) => (
        <li className={s.item} key={item.id}>
          <span className={item.isOnline ? s.online : s.offline}></span>
          <img className={s.avatar} src={item.avatar} alt='' width='48' />
          <p className={s.name}>{item.name}</p>
        </li>
      ))}
    </>
  )
}
