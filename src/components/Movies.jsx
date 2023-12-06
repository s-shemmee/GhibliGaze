import React from 'react';

export default function Movies() {
  return (
    <section className="py-10 lg:py-10 bg-stone-100 dark:bg-gray-800" id="movies">
      <div className="max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
        {/* Section Title */}
        <div className="text-center flex flex-col items-center mb-8">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Masterpieces</span>
          <h1 className="mt-2 text-3xl font-black font-oregano text-gray-700 md:text-5xl border-b-4 border-pink-500 dark:text-gray-300">
            Movies
          </h1>
        </div>

        {/* row 1 */}
        <div className="w-full px-4 flex flex-row space-x-8 items-center mt-20">
          {/* Column 1 - Left */}
          <div className="w-1/3 bg-gradient-to-tl from-red-500 to-orange-500 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center text-white">
            <div className="flex flex-col">
              <h3 className="font-bold md:text-4xl">
                Spirited Away
              </h3>
              <span className="lg:text-md">| 2001</span>
              <p className="lg:text-md italic mt-4">
                Animation, Adventure, Family
              </p>
            </div>
          </div>
          {/* Column 2 - Center */}
          <div className="w-1/3 flex items-center justify-center">
            <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
              千<br />
              と<br />
              千<br />
              尋<br />
              の<br />
              神<br />
              隠<br />
              し
            </div>
          </div>
          {/* Column 3 - Right */}
          <div className="w-1/3 relative">
            <img
              className="w-full h-full rounded-full shadow-lg object-cover object-center"
              src="./src/assets/movies/spirited_away.jpg"
              alt="Spirited Away"
            />
          </div>
        </div>

        {/* row 2 */}
        <div className="w-full px-4 flex flex-row space-x-8 items-center mt-20">
          {/* Column 1 - Left */}
          <div className="w-1/3 relative">
            <img
              className="w-full h-full rounded-full shadow object-cover object-center"
              src="./src/assets/movies/grave_of_the_fireflies.jpg"
              alt="Grave of the Fireflies"
            />
          </div>
          {/* Column 2 - Center */}
          <div className="w-1/3 flex items-center justify-center">
            <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
              火<br />
              垂<br />
              る<br />
              の<br />
              墓
            </div>
          </div>
          {/* Column 3 - Right */}
          <div className="w-1/3 bg-gradient-to-tl from-orange-400 to-sky-700 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center text-white">
            <div className="flex flex-col">
              <h3 className="font-bold md:text-4xl">
                Grave of the<br/>Fireflies
              </h3>
              <span className="lg:text-md">| 1988</span>
              <p className="lg:text-md italic mt-4">
                Animation, Drama, War
              </p>
            </div>
          </div>
        </div>

        {/* row 3 */}
        <div className="w-full px-4 flex flex-row space-x-8 items-center mt-20">
          {/* Column 1 - Left */}
          <div className="w-1/3 bg-gradient-to-tl from-amber-500 to-lime-700 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center text-white">
            <div className="flex flex-col">
              <h3 className="font-bold md:text-4xl">
                Princess<br/>Mononoke
              </h3>
              <span className="lg:text-md">| 1997</span>
              <p className="lg:text-md italic mt-4">
                Animation, Adventure, Fantasy
              </p>
            </div>
          </div>
          {/* Column 2 - Center */}
          <div className="w-1/3 flex items-center justify-center">
            <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
              も<br />
              の<br />
              の<br />
              け<br />
              姫
            </div>
          </div>
          {/* Column 3 - Right */}
          <div className="w-1/3 relative">
            <img
              className="w-full h-full rounded-full shadow object-cover object-center"
              src="./src/assets/movies/princess_mononoke.png"
              alt="Princess Mononoke"
            />
          </div>
        </div>

        {/* row 4 */}
        <div className="w-full px-4 flex flex-row space-x-8 items-center mt-20">
          {/* Column 1 - Left */}
          <div className="w-1/3 relative">
            <img
              className="w-full h-full rounded-full shadow object-cover object-center"
              src="./src/assets/movies/howls_moving_castle.jpg"
              alt="Howl's Moving Castle"
            />
          </div>
          {/* Column 2 - Center */}
          <div className="w-1/3 flex items-center justify-center">
            <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
              ハ<br />
              ウ<br />
              ル<br />
              の<br />
              動<br />
              く<br />
              城
            </div>
          </div>
          {/* Column 3 - Right */}
          <div className="w-1/3 bg-gradient-to-br from-orange-500 to-amber-300 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center text-white">
            <div className="flex flex-col">
              <h3 className="font-bold md:text-4xl">
                Howl's Moving<br /> Castle
              </h3>
              <span className="lg:text-md">| 2004</span>
              <p className="lg:text-md italic mt-4">
                Animation, Adventure, Family
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
