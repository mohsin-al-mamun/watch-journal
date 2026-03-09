import React, { useState, useRef } from "react";
import HeroSection from "../../components/herosection/HeroSection";
import WatchCard from "../../components/watch-card/WatchCard";
import Banner from "../../components/banner/Banner";
import FavouriteBrands from "../../components/favourite-brands/FavouriteBrands";
import WatchDetailsSection from "../../components/watch-details-section/WatchDetailsSection";
import WatchShops from "../../components/watch-shops/WatchShops";
import styles from "./Home.module.css";

export default function Home() {
  const watchSectionRef = useRef(null);
  const scrollToWacthSection = () => {
    watchSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={styles.main}>
      <HeroSection scrollToWacthSection={scrollToWacthSection} />
      <WatchDetailsSection watchSectionRef={watchSectionRef} />
      <Banner />
      <FavouriteBrands />
      <WatchShops />
    </main>
  );
}
