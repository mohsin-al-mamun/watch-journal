import React from "react";
import styles from "./CssPractice.module.css";
import { FAVOTITE_BRANDS } from "../../../data/watches";

export default function CssPractice() {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        {FAVOTITE_BRANDS.map((item, index) => (
          <div key={index} className={styles.items}>
            <img src={item.path} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
