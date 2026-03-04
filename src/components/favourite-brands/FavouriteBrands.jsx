import React from "react";
import styles from "./FavouriteBrands.module.css";

export default function FavouriteBrands() {
  return (
    <section className={styles.section}>
      <h2>Brands I am using</h2>
      <div className={styles.brands}>
        <div className={styles.brandItem}>
          <img src="/images/amazfit.png" alt="Amazfit" />
        </div>
        <div className={styles.brandItem}>
          <img src="/images/casio.png" alt="" />
        </div>
        <div className={styles.brandItem}>
          <img src="/images/celloxLogo.png" alt="" />
        </div>
        <div className={styles.brandItem}>
          <img src="/images/fastrack.png" alt="" />
        </div>
        <div className={styles.brandItem}>
          <img src="/images/naviforce.png" alt="" />
        </div>
        <div className={styles.brandItem}>
          <img src="/images/seiko.png" alt="" />
        </div>
      </div>
    </section>
  );
}
