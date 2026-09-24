import { useEffect, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import whiteLogo from "../assets/ghibli_logo_white.png";
import blackLogo from "../assets/ghibli_logo_black.png";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Movies", href: "#movies" },
  { name: "Trailers", href: "#trailers" },
  { name: "Gallery", href: "#gallery" },
  { name: "News", href: "#news" },
];

// Self-hosted hero assets (put in /public)
const HERO_VIDEO_MP4 = "/hero.mp4";
const HERO_POSTER = "/hero-poster.jpg";

// Shared by the header bar and the mobile-menu bar so the logo and the
// hamburger / close button sit at exactly the same spot in both states.
const BAR = "flex items-center justify-between px-4 py-4";
const LOGO_LINK = "-m-1.5 flex rounded-md p-1.5";
const LOGO_IMG = "block h-10 w-auto";
const ICON_BTN =
  "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black";
const focusRingDark =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4e6a3a]";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(() =>
    typeof window === "undefined"
      ? false
      : !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setIsPlaying(!e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <section className="bg-stone-100" id="hero">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <div
          className="absolute inset-x-0 top-0 pointer-events-none h-28 bg-gradient-to-b from-black/70 to-transparent"
          aria-hidden="true"
        />
        <nav
          aria-label="Main"
          className={`relative mx-auto max-w-screen-xl ${BAR}`}
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#hero" className={`${LOGO_LINK} ${focusRing}`}>
              <img
                className={LOGO_IMG}
                src={whiteLogo}
                alt="GhibliGaze home"
                width="83"
                height="40"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              aria-label="Open main menu"
              aria-haspopup="dialog"
              aria-expanded={mobileMenuOpen}
              className={`${ICON_BTN} text-white ${focusRing}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop links: 16px, underline grows in on hover/focus */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative rounded-sm py-2 text-base font-semibold leading-6 tracking-wide text-white transition-colors duration-300 hover:text-[#a9cc8a] focus-visible:text-[#a9cc8a] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[#a9cc8a] after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none ${focusRing}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile menu: full width below lg so nothing shifts on open */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 z-50" aria-hidden="true" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-100">
            <div className={BAR}>
              <a
                href="#hero"
                className={`${LOGO_LINK} ${focusRingDark}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <img
                  className={LOGO_IMG}
                  src={blackLogo}
                  alt="GhibliGaze home"
                  width="83"
                  height="40"
                />
              </a>
              <button
                type="button"
                className={`${ICON_BTN} text-gray-700 ${focusRingDark}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            <div className="px-4 pb-8 mt-4">
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`-mx-2 flex min-h-12 items-center rounded-lg border-l-4 border-transparent px-4 text-lg font-semibold text-gray-900 transition-colors hover:border-[#4e6a3a] hover:bg-stone-200/70 focus-visible:border-[#4e6a3a] focus-visible:bg-stone-200/70 active:bg-stone-200 motion-reduce:transition-none ${focusRingDark}`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Content */}
      <main className="relative min-h-[100svh] overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 object-cover w-full h-full"
          poster={HERO_POSTER}
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src={HERO_VIDEO_MP4} type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/45"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[100svh] max-w-screen-xl items-center px-4 py-28 sm:px-6 lg:px-8">
          <div className="w-full px-4 lg:w-1/2">
            <h1 className="hero-rise font-oregano text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-extrabold mb-6">
              Gaze On{" "}
              <strong className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6f9a52] to-[#8fb56f]">
                GhibliGaze
              </strong>
            </h1>

            <p
              className="max-w-md text-base leading-relaxed hero-rise text-stone-100 sm:text-lg"
              style={{ animationDelay: "120ms" }}
            >
              Step into the world of Studio Ghibli. Wander through enchanted
              landscapes, meet unforgettable characters, and let every frame
              tell its story.
            </p>

            <div
              className="flex flex-col items-start gap-2 mt-8 hero-rise sm:flex-row sm:items-center sm:gap-4"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="#about"
                className={`block rounded-3xl bg-[#4e6a3a] px-12 py-3 text-center text-base font-medium text-stone-100 shadow transition-colors hover:bg-[#3f5630] active:bg-[#354a29] motion-reduce:transition-none ${focusRing}`}
              >
                Explore Now
              </a>

              {/* Hand-written note: arrow sits above the text on mobile
                  (pointing up at the button) and beside it on sm+ (pointing left). */}
              <div className="ml-10 flex flex-col-reverse items-center font-hand sm:ml-8 sm:origin-top-left sm:rotate-[10deg] sm:flex-col">
                <p className="text-stone-100">
                  Get Ready
                  <br />
                  for Magic
                </p>
                <svg
                  className="w-8 h-10 text-stone-100 sm:-rotate-90"
                  viewBox="0 0 32 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M22 37 C22 24 12 16 10 4" />
                  <path d="M4 10 L10 3 L17 9" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsPlaying((p) => !p)}
          aria-pressed={!isPlaying}
          aria-label={
            isPlaying ? "Pause background video" : "Play background video"
          }
          className={`absolute bottom-4 right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 ${focusRing}`}
        >
          {isPlaying ? (
            <PauseIcon className="w-5 h-5" aria-hidden="true" />
          ) : (
            <PlayIcon className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </main>
    </section>
  );
}