import React from "react";
import styles from "./WatchShops.module.css";

export default function WatchShops() {
  return (
    <section className={styles.section}>
      <h2>Few Online Shops in Bangladesh</h2>
      <div className={styles.shopContainer}>
        <div className={styles.shop}>
          <img src="/images/shops/clockwise.png" alt="" />
        </div>
        <div className={styles.shop}>
          {" "}
          <img src="/images/shops/timeacess.png" alt="" />
        </div>
        <div className={styles.shop}>
          {" "}
          <img src="/images/shops/timezone.png" alt="" />
        </div>
        <div className={styles.shop}>
          {" "}
          <img src="/images/shops/watchzone.png" alt="" />
        </div>
      </div>
    </section>
  );
}
