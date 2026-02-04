import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lenka Durga prasad</h1>
        <p className={styles.description}>I’m a full-stack developer with hands-on experience in MERN stack technologies and real-world projects.
            Reach out if you’d like to learn more.
        </p>
        <a href="mailto:abhiramnaidu0007@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  );
}
