import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <div className={styles.wrapper}>
    <div className={styles.content}>
      © Chris Jackson
      {currentYear}
      {" - "}
      <a href="https://github.com/chrsjxn/chrsjxn-io-ssr" rel="noreferrer noopener">
        src
      </a>
      {" - "}
      <a href="https://twitter.com/c_jackson_js" rel="noreferrer noopener">twitter</a>
      {" - "} Be kind!
    </div>
  </div>
}