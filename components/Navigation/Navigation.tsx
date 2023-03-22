import Link from "next/link";
import styles from "./Navigation.module.css"

export const Navigation = () => <nav className={styles.navigation}>
  <div>
    <Link href="/">Home</Link>
  </div>
  <div className={styles.rightNav}>
    <Link href="/about">About</Link>
    {/* <ThemePicker />
  <button on:click={toggleTerminal}>💻</button> */}
  </div>
</nav>