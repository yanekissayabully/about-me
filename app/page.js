import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <main className={styles.content}>
        <About />
        <Contact />
      </main>
    </div>
  );
}
