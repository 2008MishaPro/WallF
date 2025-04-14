import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { MainPage } from "./Components/Pages/MainPage";
import { HouseInfoPage } from "./Components/Pages/HouseInfoPage";
import "./Components/UI/Text/TextStyle.css";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/house/:houseId" element={<HouseInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
