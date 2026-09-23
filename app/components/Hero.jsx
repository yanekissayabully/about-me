import { profile } from "../data";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <header className={styles.hero}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.avatar} src={profile.avatarUrl} alt={profile.name} />
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.role}>{profile.role}</p>
      <p className={styles.tagline}>{profile.tagline}</p>
    </header>
  );
}

export default Hero;
