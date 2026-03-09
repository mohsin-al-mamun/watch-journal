import React from "react";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section id={styles.bannerContainer}>
      <div id={styles.bannerImage}>
        <img src="public/images/watches/casio_EFR_571DB_1A1V.webp" alt="" />
      </div>
      <div id={styles.bannerText}>
        <span> It doesn't just tell time. It tells history.</span>
        <span> -Rolex</span>
      </div>
    </section>
  );
}
