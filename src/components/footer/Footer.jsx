import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/logo_only.png" alt="Logo" />
        </div>
        <div className={styles.socialMediaDiv}>
          <div className={styles.socialBtn}>
            <img src="/images/facebook.svg" alt="Facebook" />
          </div>

          <div className={styles.socialBtn}>
            <img src="/images/linkedin.svg" alt="Linkedin" />
          </div>
          <div className={styles.socialBtn}>
            <img src="/images/github.svg" alt="Github" />
          </div>
        </div>

        <hr className={styles.divider} />
        <p className={styles.copyRight}>
          © {new Date().getFullYear()} Mohsin Inc, All right reserved
        </p>
      </div>
    </section>
  );
}
