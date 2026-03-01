import { useState } from "react";
import MainLayout from "./layout/MainLayout";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import WatchDetails from "./pages/watch-details/WatchDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="watch/:id" element={<WatchDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
