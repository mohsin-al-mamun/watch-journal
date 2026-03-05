import styles from "./FavouriteBrands.module.css";
import { FAVOTITE_BRANDS } from "../../data/watches";

export default function FavouriteBrands() {
  return (
    <section className={styles.section}>
      <h2>Brands I am using</h2>
      <div className={styles.brands}>
        {FAVOTITE_BRANDS.map((item) => (
          <div className={styles.brandItem}>
            <img src={item.path} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
