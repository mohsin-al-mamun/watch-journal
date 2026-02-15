import React from "react";
import HeroSection from "../../components/herosection/HeroSection";
import WatchCard from "../../components/watch-card/WatchCard";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className={styles["watch-details-title"]}>
        <h1>Family Watch Collection</h1>
        <p>A record of time across hands</p>
      </div>
      <div className={styles["filter-group"]}>
        <button>All</button>
        <button>My Watches</button>
        <button>Others's</button>
      </div>

      <div className={styles["watch-card-container"]}>
        <WatchCard watchImg="public/images/watch1.webp" />
        <WatchCard watchImg="public/images/gptwatch2.webp" />
        <WatchCard watchImg="public/images/watch3.webp" />
      </div>
    </main>
  );
}
