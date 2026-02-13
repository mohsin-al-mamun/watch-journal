import React from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles["text-div"]}>
        <p className={styles.title}>
          <span className={styles.titleup}>Timeless elegance,</span>
          <span className={styles.titledown}>Crafted to endure.</span>
        </p>
        <p className={styles.subtittle}>
          A curated journal celebrating classic watches,
          <br /> craftsmanship, and enduring design.
        </p>
        <button className={styles.herobtn}>Explore Collection</button>
      </div>
    </div>
  );
}
