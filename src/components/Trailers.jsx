import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const PLAYLIST_ID = "PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1";

export default function Trailers() {
  const [trailers, setTrailers] = useState([]);
  const [currentTrailer, setCurrentTrailer] = useState(0);

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
        );
        const trailerData = response.data.items.map((item) => ({
          id: item.snippet.resourceId.videoId,
          thumbnail:
            item.snippet.thumbnails.maxres?.url ||
            item.snippet.thumbnails.high.url,
        }));
        setTrailers(trailerData);
      } catch (error) {
        console.error("Error fetching trailers", error);
      }
    };

    fetchTrailers();
  }, []);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section
      className="py-10 lg:py-10 bg-stone-100 sm:px-4 md:px-6"
      id="trailers"
    >
      <div className="max-w-screen-xl py-4 mx-auto lg:py-6 relative">
        {/* Section Title */}
        <div className="text-center flex flex-col items-center mb-8">
          <span className="text-sm text-gray-600 uppercase">Trailers</span>
          <h1 className="mt-2 text-3xl font-black font-oregano text-gray-700 md:text-5xl border-b-4 border-yellow-500">
            Watch the Magic
          </h1>
        </div>

        {/* Big Frame for Currently Played Trailer */}
        <div className="w-full h-full mb-4 border-8 border-yellow-500 rounded-lg aspect-video">
          {trailers.length > 0 && (
            <YouTube
              videoId={trailers[currentTrailer].id}
              opts={opts}
              className="aspect-video h-100 w-full"
            />
          )}
        </div>

        {/* Carousel of Smaller Frames with Thumbnails */}
        <AliceCarousel
          items={trailers.map((trailer, index) => (
            <button
              key={trailer.id}
              className={`aspect-video lg:w-72 lg:h-40 md:w-64 md:h-36 sm:w-52 sm:h-28 cursor-pointer${
                currentTrailer === index
                  ? "border-4 border-yellow-500 rounded-lg"
                  : ""
              }`}
              onClick={() => setCurrentTrailer(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setCurrentTrailer(index);
                }
              }}
            >
              <img
                src={trailer.thumbnail}
                alt={`Thumbnail for Trailer ${index + 1}`}
                className="w-full h-full object-fit rounded-md"
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
