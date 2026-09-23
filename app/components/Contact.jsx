import { contacts } from "../data";
import cardStyles from "./Card.module.css";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={cardStyles.card}>
      <h2>Contact</h2>
      <ul className={styles.list}>
        {contacts.map((c) => (
          <li className={styles.item} key={c.label}>
            <span className={styles.icon}>{c.icon}</span>
            <span className={styles.label}>{c.label}:</span>
            {c.href ? (
              <a className={styles.value} href={c.href} target="_blank" rel="noreferrer">
                {c.value}
              </a>
            ) : (
              <span className={styles.value}>{c.value}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contact;
