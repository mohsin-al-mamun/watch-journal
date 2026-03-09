import styles from "./WatchDetailsSection.module.css";
import { useState } from "react";
import { WATCH_INFO } from "../../data/watches";
import WatchCard from "../watch-card/WatchCard";

export default function WatchDetailsSection({ watchSectionRef }) {
  const [activeFilter, setActiveFilter] = useState("");
  return (
    <section>
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
        {WATCH_INFO.map((item, index) => (
          <WatchCard watchImg={item.watchImg} key={index} />
        ))}
      </div>
    </section>
  );
}
