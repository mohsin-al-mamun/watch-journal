import styles from "./MainLayout.module.css";
import TopNav from "../components/top-navbar/TopNav";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router";
import FavouriteBrands from "../components/favourite-brands/FavouriteBrands";
export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <TopNav />
      <Outlet />
      <Footer />
    </div>
  );
}
