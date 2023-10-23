import "./App.css";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { NavLink } from "react-router-dom";
import Topics from "./components/Topics";
import Users from "./Users";
import Articles from "./components/Articles";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/topics" element={<Topics />} />
          <Route path="/" element={<Articles />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
