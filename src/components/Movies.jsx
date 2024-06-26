import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import spiritedAwayImage from "../assets/movies/spirited_away.jpg";
import spiritedAwayGif from "../assets/movies/spiritedaway.gif";
import graveOfTheFirefliesImage from "../assets/movies/grave_of_the_fireflies.jpg";
import graveOfTheFirefliesGif from "../assets/movies/graveofthefireflies.gif";
import princessMononokeImage from "../assets/movies/princess_mononoke.png";
import princessMononokeGif from "../assets/movies/princessmononokesan.gif";
import howlsMovingCastleImage from "../assets/movies/howls_moving_castle.jpg";
import howlsMovingCastleGif from "../assets/movies/howlsmovingcastle.gif";
import myNeighborTotoroImage from "../assets/movies/my_neighbor_totoro.jpg";
import myNeighborTotoroGif from "../assets/movies/myneighbortotoro.gif";
import castleInTheSkyImage from "../assets/movies/castle_in_the_sky.jpg";
import castleInTheSkyGif from "../assets/movies/castleinthesky.gif";
import theWindRisesImage from "../assets/movies/the_wind_rises.jpg";
import theWindRisesGif from "../assets/movies/thewindrises.gif";
import porcoRossoImage from "../assets/movies/porco_rosso.jpg";
import porcoRossoGif from "../assets/movies/porcorosso.gif";
import kikisDeliveryService from "../assets/movies/kikis_delivery_service.jpg";
import kikisDeliveryServiceGif from "../assets/movies/kikisDeliveryService.gif";

const movies = [
  {
    id: "1",
    title: "The Wind Rises",
    year: 2013,
    genres: "Animation, Biography, Drama",
    image: theWindRisesImage,
    gif: theWindRisesGif,
    japaneseTitle: "風立ちぬ",
    gradient: "from-emerald-400 to-cyan-400",
  },
  {
    id: "2",
    title: "Howl's Moving Castle",
    year: 2004,
    genres: "Animation, Adventure, Family",
    image: howlsMovingCastleImage,
    gif: howlsMovingCastleGif,
    japaneseTitle: "ハウルの動く城",
    gradient: "from-yellow-200 to-amber-500",
  },
  {
    id: "3",
    title: "Spirited Away",
    year: 2001,
    genres: "Animation, Adventure, Family",
    image: spiritedAwayImage,
    gif: spiritedAwayGif,
    japaneseTitle: "千と千尋の神隠し",
    gradient: "from-red-500 to-orange-500",
  },
  {
    id: "4",
    title: "Porco Rosso",
    year: 1992,
    genres: "Animation, Adventure, Comedy",
    image: porcoRossoImage,
    gif: porcoRossoGif,
    japaneseTitle: "紅の豚",
    gradient: "from-amber-500 to-pink-500",
  },
  {
    id: "5",
    title: "Princess Mononoke",
    year: 1997,
    genres: "Animation, Adventure, Fantasy",
    image: princessMononokeImage,
    gif: princessMononokeGif,
    japaneseTitle: "もののけ姫",
    gradient: "from-amber-500 to-lime-700",
  },
  {
    id: "6",
    title: "My Neighbor Totoro",
    year: 1988,
    genres: "Animation, Comedy, Family",
    image: myNeighborTotoroImage,
    gif: myNeighborTotoroGif,
    japaneseTitle: "となりのトトロ",
    gradient: "from-sky-200 to-sky-600",
  },
  {
    id: "7",
    title: "Grave of the Fireflies",
    year: 1988,
    genres: "Animation, Drama, War",
    image: graveOfTheFirefliesImage,
    gif: graveOfTheFirefliesGif,
    japaneseTitle: "火垂るの墓",
    gradient: "from-blue-800 to-blue-300",
  },
  {
    id: "8",
    title: "Castle in the Sky",
    year: 1986,
    genres: "Animation, Adventure, Family",
    image: castleInTheSkyImage,
    gif: castleInTheSkyGif,
    japaneseTitle: "天空の城ラピュタ",
    gradient: "from-yellow-200 to-pink-500",
  },
  {
    id: "9",
    title: "Kiki's Delivery Service",
    year: 1989,
    genres: "Family, Adventure, Fantasy",
    image: kikisDeliveryService,
    gif: kikisDeliveryServiceGif,
    japaneseTitle: "魔女の宅急便",
    gradient: "from-purple-500 to-blue-800",
  },
];

export default function Movies() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  const renderMovies = (startIndex) => (
    <>
      {movies.slice(startIndex, startIndex + 3).map((movie) => {
        const isReversed = movie.id % 2 === 0;
        return (
          <div
            className={`w-full px-4 flex ${
              isReversed ? "flex-row-reverse" : "flex-row"
            } items-center mt-20`}
            key={movie.id}
          >
            <div
              className={`w-1/3 bg-gradient-to-tl ${movie.gradient} rounded-xl shadow-lg p-2 aspect-square flex items-center justify-center text-white`}
            >
              <div className="flex flex-col p-4">
                <h3 className="font-bold md:text-4xl">{movie.title}</h3>
                <span className="lg:text-md">| {movie.year}</span>
                <p className="lg:text-md italic mt-4">{movie.genres}</p>
              </div>
            </div>
            <div className="w-1/3 flex items-center justify-center">
              <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
                {movie.japaneseTitle.split("").map((char, idx) => (
                  <span key={idx}>
                    {char}
                    <br />
                  </span>
                ))}
              </div>
            </div>
            <div className="w-1/3 relative group">
              <img
                className="w-full h-full rounded-full shadow object-cover object-center transition-transform transform hover:scale-110"
                src={movie.image}
                alt={movie.title}
                loading="lazy"
              />
              <img
                className="hidden w-full h-full rounded-full shadow object-cover object-center absolute top-0 left-0 transition-opacity opacity-0 group-hover:opacity-100"
                src={movie.gif}
                alt={`${movie.title} Hover`}
                loading="lazy"
              />
            </div>
          </div>
        );
      })}
    </>
  );

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
          <div>{renderMovies(0)}</div>
          <div>{renderMovies(3)}</div>
          <div>{renderMovies(6)}</div>
        </Slider>
      </div>
    </section>
  );
}
