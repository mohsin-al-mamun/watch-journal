import { useState } from "react";
import MainLayout from "./layout/MainLayout";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import WatchDetails from "./pages/watch-details/WatchDetails";
import CssPractice from "./components/r&d/styles-practice/CssPractice";
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="watch/:id" element={<WatchDetails />} />
      </Route>
      <Route path="/css" element={<CssPractice />} />
    </Routes>
  );
}

export default App;
