import React from "react";
import styles from "./MainLayout.module.css";
import TopNav from "../components/top-navbar/TopNav";
import Home from "../pages/home/Home";
import WatchDetails from "../pages/watch-details/WatchDetails";

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <TopNav />
      <div className={styles.main}>
        <Home />
        <WatchDetails />
      </div>
    </div>
  );
}
