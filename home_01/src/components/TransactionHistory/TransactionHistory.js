import PropTypes from 'prop-types'
import React from 'react'
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((data) => (
          <tr key={data.id}>
            <td>{data.type}</td>
            <td>{data.amount}</td>
            <td>{data.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
}

export default TransactionHistory
