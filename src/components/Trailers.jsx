// 📝 Note: Refactoring this code may result in spontaneous hair pulling and extreme bouts of "code regret."
// Achieving this layout and functionality was a journey, and I don't have the time or the courage to go through that again. 😭
// Proceed with caution or grab some snacks and enjoy the show! 💻🍿

// Consider using the YouTube API from the Google Console to resolve embedding errors.
// Refactoring to use the API directly for fetching video data may be a solution.
// See the YouTube Data API documentation: https://developers.google.com/youtube/v3

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
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
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
        <div className="w-full h-full mb-4 border-8 border-yellow-500 rounded-lg aspect-video">
          <YouTube videoId={youtubeTrailers[currentTrailer].id} opts={opts}
          className="aspect-video h-100 w-full" />
        </div>

        {/* Carousel of Smaller Frames with Thumbnails */}
        <AliceCarousel
          items={youtubeTrailers.map((trailer) => (
            <div
              key={trailer.id}
              className={`aspect-video lg:w-72 lg:h-40 md:w-64 md:h-36 sm:w-52 sm:h-28 cursor-pointer${
                currentTrailer === youtubeTrailers.indexOf(trailer)
                  ? ' border-4 border-yellow-500 rounded-lg'
                  : ''
              }`}              
              onClick={() => setCurrentTrailer(youtubeTrailers.indexOf(trailer))}
            >
              <img
                src={trailer.thumbnail}
                alt={`Thumbnail for Trailer ${youtubeTrailers.indexOf(trailer) + 1}`}
                className="w-full h-full object-fit rounded-md"
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
