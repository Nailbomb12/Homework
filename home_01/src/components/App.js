import React from "react"

import Profile from "./Profile/Profile"
import user from "./Profile/user.json"

import Statistics from "./Statistics/Statistics"
import statisticalData from "./Statistics/statistical-data.json"

import FriendList from "./FriendList/FriendList"
import friends from "./FriendList/friends.json"

import TransactionHistory from "./TransactionHistory/TransactionHistory"
import transactions from "./TransactionHistory/transactions.json"

export default function App() {
  return (
    <>
      <h1>Homework 1</h1>
      <h2>Task-01</h2>
      <Profile {...user} />
      {/* <Profile user={user}/> */}

      <h2>Task-02</h2>
      <Statistics title='Fucking title' stats={statisticalData} />

      <h2>Task-03</h2>
      <FriendList friends={friends} />

      <h2>Task-04</h2>
      <TransactionHistory items={transactions} />
    </>
  )
}
