import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./globals.css";
import "@fontsource/oregano/latin-400.css";
import "@fontsource/gochi-hand/latin-400.css";
import "@fontsource/assistant/latin-400.css";
import "@fontsource/assistant/latin-500.css";
import "@fontsource/assistant/latin-600.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
