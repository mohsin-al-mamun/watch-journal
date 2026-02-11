import React from "react";
import styles from "./MainLayout.module.css";
import TopNav from "../components/top-navbar/TopNav";

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <TopNav />

      {/* <div className={styles.main}> Main Content </div> */}
      {/* Space for Footer */}
    </div>
  );
}
