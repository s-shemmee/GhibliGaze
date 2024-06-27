import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./globals.css";

// Function to set the volume of the audio element
function setAudioVolume(volume) {
  const audio = document.getElementById("backgroundAudio");
  if (audio) {
    audio.volume = volume;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

setAudioVolume(0.2);
