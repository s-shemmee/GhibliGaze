import React, { useState } from 'react';
import YouTube from 'react-youtube';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Trailers() {
  const [currentTrailer, setCurrentTrailer] = useState(0); // Default trailer index
  const youtubeTrailers = [
    {
      id: 'HaLISMAGdOE',
      thumbnail: 'https://i.ytimg.com/vi/HaLISMAGdOE/maxresdefault.jpg',
    },
    {
      id: 'zaskbIZtfxQ',
      thumbnail: 'https://i.ytimg.com/vi/zaskbIZtfxQ/maxresdefault.jpg',
    },
    {
      id: '5lMRfLJGXSM',
      thumbnail: 'https://i.ytimg.com/vi/5lMRfLJGXSM/maxresdefault.jpg',
    },
    {
      id: 'DJeUGpcle8s',
      thumbnail: 'https://i.ytimg.com/vi/DJeUGpcle8s/maxresdefault.jpg',
    },
    {
      id: '425xk0JSz84X3o0I',
      thumbnail: 'https://i.ytimg.com/vi/vf6c6n35wr4/maxresdefault.jpg',
    },
    {
      id: 'gyK5zI5AxS77Sfof',
      thumbnail: 'https://i.ytimg.com/vi/t6-fT0hjTvc/maxresdefault.jpg',
    },
    {
      id: 'S76Uj_29ZLkaLXA-',
      thumbnail: 'https://i.ytimg.com/vi/h6XP82TyFWw/maxresdefault.jpg',
    },
    {
      id: 'Vk9Amombkx2LCpwK',
      thumbnail: 'https://i.ytimg.com/vi/t5khm-VjEu4/maxresdefault.jpg',
    },
  ];

  const opts = {
    height: '700',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handlePrevClick = () => {
    setCurrentTrailer((prevTrailer) => (prevTrailer - 1 + youtubeTrailers.length) % youtubeTrailers.length);
  };

  const handleNextClick = () => {
    setCurrentTrailer((prevTrailer) => (prevTrailer + 1) % youtubeTrailers.length);
  };

  return (
    <section className="py-10 lg:py-10 bg-stone-100" id="trailers">
      <div className="max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6 relative">
        {/* Section Title */}
        
        <div className="text-center flex flex-col items-center mb-8">
          <span className="text-sm text-gray-600 uppercase">Trailers</span>
          <h1 className="mt-2 text-3xl font-black font-oregano text-gray-700 md:text-5xl border-b-4 border-yellow-500">
            Watch the Magic
          </h1>
        </div>

        {/* Big Frame for Currently Played Trailer */}
        <div className="w-full h-full mb-4 border-8 border-yellow-500 rounded-lg">
          <YouTube videoId={youtubeTrailers[currentTrailer].id} opts={opts} />

          {/* Custom Arrow Buttons */}
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-2xl text-red focus:outline-none"
            onClick={handlePrevClick}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-2xl text-red focus:outline-none"
            onClick={handleNextClick}
          >
            &gt;
          </button>
        </div>

        {/* Carousel of Smaller Frames with Thumbnails */}
        <AliceCarousel
          items={youtubeTrailers.map((trailer) => (
            <div
              key={trailer.id}
              className={`w-64 h-32 cursor-pointer ${
                currentTrailer === youtubeTrailers.indexOf(trailer)
                  ? 'border-4 border-yellow-500 rounded-lg'
                  : ''
              }`}
              onClick={() => setCurrentTrailer(youtubeTrailers.indexOf(trailer))}
            >
              <img
                src={trailer.thumbnail}
                alt={`Thumbnail for Trailer ${youtubeTrailers.indexOf(trailer) + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
          responsive={
            { 
              1280: { items: 4 }, 
              768: { items: 3 }, 
              480: { items: 2 },
            }
          }
          mouseTrackingEnabled
          disableButtonsControls
        />

        {/* Call-to-Action */}
        <div className="mt-8 text-center">
          <a
            href="https://youtube.com/playlist?list=PLrMoWLZPWpBU8qR-2hp90obIEEAelORR1&si=fWJkKYvSPOH5p2bu"
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
