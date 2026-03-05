import React from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection({ scrollToWacthSection }) {
  return (
    <div className={styles.container}>
      <div className={styles["text-div"]}>
        <p className={styles.title}>
          <span className={styles.titleup}>Timeless Elegance,</span>
          <span className={styles.titledown}>Crafted to Endure.</span>
        </p>
        <p className={styles.subtittle}>
          A curated journal celebrating classic watches,
          <br /> craftsmanship, and enduring design.
        </p>
        <button className={styles.herobtn} onClick={scrollToWacthSection}>
          Explore Collection
        </button>
      </div>
    </div>
  );
}
