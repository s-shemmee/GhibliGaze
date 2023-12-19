import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Movies() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <section className="py-10 lg:py-10 bg-stone-100" id="movies">
      <div className="max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
        {/* Section Title */}
        <div className="text-center flex flex-col items-center mb-8">
          <span className="text-sm text-gray-600 uppercase">Masterpieces</span>
          <h1 className="mt-2 text-3xl font-black font-oregano text-gray-700 md:text-5xl border-b-4 border-pink-500">
            Movies
          </h1>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            {/* Movie 1 */}
            <div className="w-full px-4 flex flex-row space-x-8 items-center mt-20">
              <div className="w-1/3 bg-gradient-to-tl from-red-500 to-orange-500 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center text-white">
                <div className="flex flex-col">
                  <h3 className="font-bold md:text-4xl">Spirited Away</h3>
                  <span className="lg:text-md">| 2001</span>
                  <p className="lg:text-md italic mt-4">
                    Animation, Adventure, Family
                  </p>
                </div>
              </div>
              <div className="w-1/3 flex items-center justify-center">
                <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
                  千<br />
                  と<br />
                  千<br />
                  尋<br />
                  の<br />
                  神<br />
                  隠<br />し
                </div>
              </div>
              <div className="w-1/3 relative group">
                <img
                  className="w-full h-full rounded-full shadow object-cover object-center transition-transform transform hover:scale-110"
                  src="./src/assets/movies/spirited_away.jpg"
                  alt="Sprited Away"
                />
                <img
                  className="hidden w-full h-full rounded-full shadow object-cover object-center absolute top-0 left-0 transition-opacity opacity-0 group-hover:opacity-100"
                  src="./src/assets/movies/spiritedaway.gif"
                  alt="Sprited Away Hover"
                />
              </div>
            </div>

            {/* Movie 2 */}
            <div className="w-full px-4 flex flex-row space-x-8 items-center mt-20">
              <div className="w-1/3 relative group">
                <img
                  className="w-full h-full rounded-full shadow object-cover object-center transition-transform transform hover:scale-110"
                  src="./src/assets/movies/grave_of_the_fireflies.jpg"
                  alt="Grave of the Fireflies"
                />
                <img
                  className="hidden w-full h-full rounded-full shadow object-cover object-center absolute top-0 left-0 transition-opacity opacity-0 group-hover:opacity-100"
                  src="./src/assets/movies/graveofthefireflies.gif"
                  alt="Grave of the Firedlies Hover"
                />
              </div>
              <div className="w-1/3 flex items-center justify-center">
                <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
                  火<br />
                  垂<br />
                  る<br />
                  の<br />墓
                </div>
              </div>
              <div className="w-1/3 bg-gradient-to-tl from-orange-400 to-sky-700 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center text-white">
                <div className="flex flex-col">
                  <h3 className="font-bold md:text-4xl">
                    Grave of the
                    <br />
                    Fireflies
                  </h3>
                  <span className="lg:text-md">| 1988</span>
                  <p className="lg:text-md italic mt-4">
                    Animation, Drama, War
                  </p>
                </div>
              </div>
            </div>

            {/* Movie 3 */}
            <div className="w-full px-4 flex flex-row space-x-8 items-center mt-20">
              <div className="w-1/3 bg-gradient-to-tl from-amber-500 to-lime-700 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center text-white">
                <div className="flex flex-col">
                  <h3 className="font-bold md:text-4xl">
                    Princess
                    <br />
                    Mononoke
                  </h3>
                  <span className="lg:text-md">| 1997</span>
                  <p className="lg:text-md italic mt-4">
                    Animation, Adventure, Fantasy
                  </p>
                </div>
              </div>
              <div className="w-1/3 flex items-center justify-center">
                <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
                  も<br />
                  の<br />
                  の<br />
                  け<br />姫
                </div>
              </div>
              <div className="w-1/3 relative group">
                <img
                  className="w-full h-full rounded-full shadow object-cover object-center transition-transform transform hover:scale-110"
                  src="./src/assets/movies/princess_mononoke.png"
                  alt="Princess Mononoke"
                />
                <img
                  className="hidden w-full h-full rounded-full shadow object-cover object-center absolute top-0 left-0 transition-opacity opacity-0 group-hover:opacity-100"
                  src="./src/assets/movies/princessmononokesan.gif"
                  alt="Princess Mononoke Hover"
                />
              </div>
            </div>

            {/* Movie 4 */}
            <div className="w-full px-4 flex flex-row space-x-8 items-center mt-20">
              <div className="w-1/3 relative group">
                <img
                  className="w-full h-full rounded-full shadow object-cover object-center transition-transform transform hover:scale-110"
                  src="./src/assets/movies/howls_moving_castle.jpg"
                  alt="Howl's Moving Castle"
                />
                <img
                  className="hidden w-full h-full rounded-full shadow object-cover object-center absolute top-0 left-0 transition-opacity opacity-0 group-hover:opacity-100"
                  src="./src/assets/movies/howlsmovingcastle.gif"
                  alt="Howl's Moving Castle Hover"
                />
              </div>
              <div className="w-1/3 flex items-center justify-center">
                <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
                  ハ<br />
                  ウ<br />
                  ル<br />
                  の<br />
                  動<br />
                  く<br />城
                </div>
              </div>
              <div className="w-1/3 bg-gradient-to-br from-orange-500 to-amber-300 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center text-white">
                <div className="flex flex-col">
                  <h3 className="font-bold md:text-4xl">
                    Howl's Moving
                    <br /> Castle
                  </h3>
                  <span className="lg:text-md">| 2004</span>
                  <p className="lg:text-md italic mt-4">
                    Animation, Adventure, Family
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            {/* Movie 5 */}
            <div className="w-full px-4 flex flex-row space-x-8 items-center mt-20">
              <div className="w-1/3 bg-gradient-to-tl from-sky-200 to-sky-600 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center text-white">
                <div className="flex flex-col">
                  <h3 className="font-bold md:text-4xl">
                    My Neighbor
                    <br /> Totoro
                  </h3>
                  <span className="lg:text-md">| 1988</span>
                  <p className="lg:text-md italic mt-4">
                    Animation, Comedy, Family
                  </p>
                </div>
              </div>
              <div className="w-1/3 flex items-center justify-center">
                <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
                  と<br />
                  な<br />
                  り<br />
                  の<br />
                  ト<br />
                  ト<br />ロ
                </div>
              </div>
              <div className="w-1/3 relative group">
                <img
                  className="w-full h-full rounded-full shadow object-cover object-center transition-transform transform hover:scale-110"
                  src="./src/assets/movies/my_neighbor_totoro.jpg"
                  alt="My Neighbor Totoro"
                />
                <img
                  className="hidden w-full h-full rounded-full shadow object-cover object-center absolute top-0 left-0 transition-opacity opacity-0 group-hover:opacity-100"
                  src="./src/assets/movies/myneighbortotoro.gif"
                  alt="My Neighbor Totoro Hover"
                />
              </div>
            </div>

            {/* Movie 6 */}
            <div className="w-full px-4 flex flex-row space-x-8 items-center mt-20">
              <div className="w-1/3 relative group">
                <img
                  className="w-full h-full rounded-full shadow object-cover object-center transition-transform transform hover:scale-110"
                  src="./src/assets/movies/castle_in_the_sky.jpg"
                  alt="Castle in the Sky"
                />
                <img
                  className="hidden w-full h-full rounded-full shadow object-cover object-center absolute top-0 left-0 transition-opacity opacity-0 group-hover:opacity-100"
                  src="./src/assets/movies/castleinthesky.gif"
                  alt="Castle in the Sky Hover"
                />
              </div>
              <div className="w-1/3 flex items-center justify-center">
                <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
                  天<br />
                  空<br />
                  の<br />
                  城<br />
                  ラ<br />
                  ピ<br />
                  ュ<br />タ
                </div>
              </div>
              <div className="w-1/3 bg-gradient-to-tl from-violet-200 to-orange-200 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center text-white">
                <div className="flex flex-col">
                  <h3 className="font-bold md:text-4xl">
                    Castle in <br />
                    the Sky
                  </h3>
                  <span className="lg:text-md">| 1986</span>
                  <p className="lg:text-md italic mt-4">
                    Animation, Adventure, Family
                  </p>
                </div>
              </div>
            </div>

            {/* Movie 7 */}
            <div className="w-full px-4 flex flex-row space-x-8 items-center mt-20">
              <div className="w-1/3 bg-gradient-to-tl from-emerald-400 to-cyan-400 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center text-white">
                <div className="flex flex-col">
                  <h3 className="font-bold md:text-4xl">The Wind Rises</h3>
                  <span className="lg:text-md">| 2013</span>
                  <p className="lg:text-md italic mt-4">
                    Animation, Biography, Drama
                  </p>
                </div>
              </div>
              <div className="w-1/3 flex items-center justify-center">
                <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
                  風<br />
                  立<br />
                  ち<br />ぬ
                </div>
              </div>
              <div className="w-1/3 relative group">
                <img
                  className="w-full h-full rounded-full shadow object-cover object-center transition-transform transform hover:scale-110"
                  src="./src/assets/movies/the_wind_rises.jpg"
                  alt="The Wind Rises"
                />
                <img
                  className="hidden w-full h-full rounded-full shadow object-cover object-center absolute top-0 left-0 transition-opacity opacity-0 group-hover:opacity-100"
                  src="./src/assets/movies/thewindrises.gif"
                  alt="The Wind Rises Hover"
                />
              </div>
            </div>

            {/* Movie 8 */}
            <div className="w-full px-4 flex flex-row space-x-8 items-center mt-20">
              <div className="w-1/3 relative group">
                <img
                  className="w-full h-full rounded-full shadow object-cover object-center transition-transform transform hover:scale-110"
                  src="./src/assets/movies/porco_rosso.jpg"
                  alt="Porco Rosso"
                />
                <img
                  className="hidden w-full h-full rounded-full shadow object-cover object-center absolute top-0 left-0 transition-opacity opacity-0 group-hover:opacity-100"
                  src="./src/assets/movies/porcorosso.gif"
                  alt="Porco Rosso Hover"
                />
              </div>
              <div className="w-1/3 flex items-center justify-center">
                <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
                  紅<br />
                  の<br />豚
                </div>
              </div>
              <div className="w-1/3 bg-gradient-to-tl from-amber-500 to-pink-500 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center text-white">
                <div className="flex flex-col">
                  <h3 className="font-bold md:text-4xl">Porco Rosso</h3>
                  <span className="lg:text-md">| 1992</span>
                  <p className="lg:text-md italic mt-4">
                    Animation, Adventure, Comedy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
