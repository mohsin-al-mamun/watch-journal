import React, { useState, useRef } from "react";
import HeroSection from "../../components/herosection/HeroSection";
import WatchCard from "../../components/watch-card/WatchCard";
import styles from "./Home.module.css";
import Banner from "../../components/banner/Banner";
import FavouriteBrands from "../../components/favourite-brands/FavouriteBrands";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("");
  const watchSectionRef = useRef(null);
  const scrollToWacthSection = () => {
    watchSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  console.log("The Value of watchSectionRef ---", watchSectionRef);

  return (
    <main>
      <HeroSection scrollToWacthSection={scrollToWacthSection} />
      <div className={styles["watch-details-title"]} ref={watchSectionRef}>
        <h1>Family Watch Collection</h1>
        <p>A record of time across hands</p>
      </div>
      <div className={styles["filter-group"]}>
        <button
          onClick={() => setActiveFilter("all")}
          className={activeFilter === "all" ? styles.active : ""}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("my_watch")}
          className={activeFilter === "my_watch" ? styles.active : ""}
        >
          My Watches
        </button>
        <button
          onClick={() => setActiveFilter("other")}
          className={activeFilter === "other" ? styles.active : ""}
        >
          Others's
        </button>
      </div>

      <div className={styles["watch-card-container"]}>
        <WatchCard watchImg="public/images/watch1.webp" />
        <WatchCard watchImg="public/images/gptwatch2.webp" />
        <WatchCard watchImg="public/images/watch3.webp" />
      </div>

      <Banner />
      <FavouriteBrands />
    </main>
  );
}
