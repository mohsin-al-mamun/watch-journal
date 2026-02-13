import React from "react";
import styles from "./MainLayout.module.css";
import TopNav from "../components/top-navbar/TopNav";
import HeroSection from "../components/herosection/HeroSection";

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <TopNav />
      <div className={styles.main}>
        <HeroSection />
      </div>
    </div>
  );
}
