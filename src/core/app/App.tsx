import React from "react";
import "./App.css";
import { Header } from "../header/header";
import { AppRoutes } from "../router/router";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
