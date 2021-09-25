import React from "react"
import s from "./FriendList.module.css"
import PropTypes from "prop-types"
import FriendListItem from "../FriendListItem/FriendListItem"

export default function FriendList({ friends }) {
  // console.log(prop)
  // const { avatar, name, isOnline, id } = props
  // console.log(prop)
  return (
    <ul className={s.frendlist}>
      <FriendListItem friends={friends} />
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
