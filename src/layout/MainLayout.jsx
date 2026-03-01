import styles from "./MainLayout.module.css";
import TopNav from "../components/top-navbar/TopNav";
import { Outlet } from "react-router";
export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <TopNav />
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
}
