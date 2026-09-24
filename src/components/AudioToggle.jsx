import { useEffect, useRef, useState } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

const VOLUME = 0.35;
const STORAGE_KEY = "ghibligaze-music-off";

const readOptOut = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

const writeOptOut = (off) => {
  try {
    localStorage.setItem(STORAGE_KEY, off ? "1" : "0");
  } catch {
    /* storage unavailable: ignore */
  }
};

export default function AudioToggle() {
  const audioRef = useRef(null);
  const buttonRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = VOLUME;

    // Respect a previous "music off" choice: no autoplay, no unlock listeners.
    if (readOptOut()) return;

    const events = ["pointerdown", "keydown", "touchend"];
    const removeListeners = () =>
      events.forEach((e) => document.removeEventListener(e, unlock));

    function unlock(e) {
      // The toggle button handles its own clicks.
      if (buttonRef.current?.contains(e.target)) return;
      audio.play().then(removeListeners).catch(() => {});
    }

    audio.play().catch(() => {
      events.forEach((e) =>
        document.addEventListener(e, unlock, { passive: true })
      );
    });

    return removeListeners;
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      writeOptOut(false);
      audio.play().catch(() => {});
    } else {
      writeOptOut(true);
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/MerryGoRoundofLife.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-label={
          isPlaying ? "Mute background music" : "Play background music"
        }
        className="fixed z-50 inline-flex items-center justify-center text-white transition-colors rounded-full bottom-4 left-4 h-11 w-11 bg-black/60 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:transition-none"
      >
        {isPlaying ? (
          <SpeakerWaveIcon className="w-5 h-5" aria-hidden="true" />
        ) : (
          <SpeakerXMarkIcon className="w-5 h-5" aria-hidden="true" />
        )}
      </button>
    </>
  );
}