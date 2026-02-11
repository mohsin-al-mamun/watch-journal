import React from "react";
import styles from "./TopNav.module.css";

export default function TopNav() {
  return (
    <header>
      <nav>
        <div className={styles.container}>
          <div className={styles["inner-container"]}>
            <a href="" className={styles.logo}>
              <img src="public/images/logo-transparent1.png" alt="" />
            </a>

            {/* <img src="public/images/logo-transparent2.png" alt="" /> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
