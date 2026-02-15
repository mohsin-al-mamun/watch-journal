import { useState } from "react";
import MainLayout from "./layout/MainLayout";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
