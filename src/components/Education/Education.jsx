import React from 'react'
import styles from './Education.module.css'
import education from '../../data/education.json'

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <ul className={styles.eduList}>
        {education.map((item, idx) => (
          <li key={idx} className={styles.eduItem}>
            <div className={styles.header}>
              <h3 className={styles.institution}>{item.institution}</h3>
              <span className={styles.period}>{item.period}</span>
            </div>
            <div className={styles.degree}>{item.degree}</div>
            {item.address && (
              <div className={styles.address}>{item.address}</div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
