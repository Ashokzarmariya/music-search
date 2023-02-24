import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import keycloak from "./Config/keycloak";
import { Demo } from "./Components/Demo";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <HomePage />
    </div>
  );
}

export default App;
