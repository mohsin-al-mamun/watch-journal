import React from "react";
import styles from "./MainLayout.module.css";
import TopNav from "../components/top-navbar/TopNav";
import Home from "../pages/home/Home";

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <TopNav />
      <div className={styles.main}>
        <Home />
      </div>
    </div>
  );
}
