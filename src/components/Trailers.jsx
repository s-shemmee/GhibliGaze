import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import trailers from "../data/trailers.json";

const PLAYLIST_ID = "PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1";

export default function Trailers() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  if (trailers.length === 0) {
    return null;
  }

  const active = trailers[current];

  const selectTrailer = (index) => {
    setCurrent(index);
    setPlaying(true);
  };

  return (
    <section
      className="py-10 lg:py-10 bg-stone-100 sm:px-4 md:px-6"
      id="trailers"
    >
      <div className="relative max-w-screen-xl py-4 mx-auto lg:py-6">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-8 text-center">
          <span className="text-sm text-gray-600 uppercase">Trailers</span>
          <h2 className="mt-2 text-3xl font-black text-gray-700 border-b-4 border-yellow-500 font-oregano md:text-5xl">
            Watch the Magic
          </h2>
        </div>

        {/* Main player: loads the YouTube iframe only after a click */}
        <div className="relative w-full mb-4 overflow-hidden bg-black border-8 border-yellow-500 rounded-lg aspect-video">
          {playing ? (
            <iframe
              key={active.id}
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`}
              title={active.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play trailer: ${active.title}`}
              className="absolute inset-0 w-full h-full group focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-yellow-500"
            >
              <img
                src={active.thumbnail}
                alt=""
                loading="lazy"
                className="object-cover w-full h-full"
              />
              <span className="absolute inset-0 flex items-center justify-center transition bg-black/30 group-hover:bg-black/20">
                <span className="flex items-center justify-center w-20 h-20 text-white bg-yellow-500 rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 ml-1 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>

        {/* Carousel of thumbnails */}
        <AliceCarousel
          items={trailers.map((trailer, index) => (
            <button
              key={trailer.id}
              type="button"
              onClick={() => selectTrailer(index)}
              aria-label={`Play trailer: ${trailer.title}`}
              aria-current={current === index ? "true" : undefined}
              className="block w-full px-1 rounded-md cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-500"
            >
              <img
                src={trailer.thumbnail}
                alt=""
                loading="lazy"
                className={`w-full aspect-video object-cover rounded-md ${
                  current === index ? "ring-4 ring-yellow-500" : ""
                }`}
              />
            </button>
          ))}
          responsive={{
            1280: { items: 4 },
            768: { items: 3 },
            480: { items: 2 },
          }}
          mouseTracking
          disableButtonsControls
        />

        {/* Call-to-Action */}
        <div className="mt-8 text-center">
          <a
            href={`https://youtube.com/playlist?list=${PLAYLIST_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-lg font-medium leading-6 text-center text-white transition duration-300 bg-yellow-500 rounded-md shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Watch More
          </a>
        </div>
      </div>
    </section>
  );
}