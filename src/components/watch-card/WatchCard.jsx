import React from "react";
import styles from "./WatchCard.module.css";

export default function WatchCard({ watchImg, model, ownership, watchType }) {
  return (
    <div className={styles.container}>
      <div className={styles["watch-wrapper"]}>
        <img src={watchImg} alt="" />
      </div>
      <div className={styles["watch-info"]}>
        <p className={styles["watch-name"]}>Casio FTP 1314</p>
        <p className={styles["owned-by"]}>Me-2026</p>
        <p className={styles["watch-type"]}> Quartz</p>
      </div>
    </div>
  );
}
