import { useState } from "react";
import MainLayout from "./layout/MainLayout";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import WatchDetails from "./pages/watch-details/WatchDetails";

function App() {
  console.log("Routes Object -----", Routes);
  console.log("Route Object  -----", Route);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="watch/:id" element={<WatchDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
