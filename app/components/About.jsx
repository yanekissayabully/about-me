import { about } from "../data";
import styles from "./Card.module.css";

function About() {
  return (
    <section className={styles.card}>
      <h2>About Me</h2>
      <p className={styles.aboutText}>{about.text}</p>

      <div className={styles.skills}>
        {about.skills.map((skill) => (
          <span className={styles.skillBadge} key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;
