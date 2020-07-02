import React from "react";
import "./css/tailwind.css";

import HeadphonesState from "./Context/headphones/headphonesState";

import Home from "./Pages/Home";

function App() {
  return (
    <HeadphonesState>
      <Home />
    </HeadphonesState>
  );
}

export default App;
