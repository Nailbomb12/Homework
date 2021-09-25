import PropTypes from 'prop-types'
import React from 'react'
import styles from './Statistics.module.css'

function randomColor() {
  function rgb() {
    return Math.floor(Math.random() * 256)
  }

  return `rgb(${rgb()},${rgb()},${rgb()})`
}

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {/* 
        {title ? <h2 className={styles.title}>{title}</h2> : false} 
        Если нужно использовать тернарник, то не false, а null (react ожидает React.Node or null)
        {title ? <h2 className={styles.title}>{title}</h2> : null}
      */}

      <ul className={styles.statList}>
        {stats.map((item) => (
          <li
            className={styles.item}
            key={item.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
}
