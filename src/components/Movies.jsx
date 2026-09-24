import { useRef, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const posters = import.meta.glob("../assets/movies/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

const clips = import.meta.glob("../assets/movies/*.mp4", {
  eager: true,
  query: "?url",
  import: "default",
});

// Helper functions with fallback checking
const poster = (slug) => {
  const path = `../assets/movies/${slug}.webp`;
  const res = posters[path];
  return typeof res === "object" && res !== null ? res.default : res;
};

const clip = (slug) => {
  const path = `../assets/movies/${slug}.mp4`;
  const res = clips[path];
  return typeof res === "object" && res !== null ? res.default : res;
};

const movies = [
  {
    id: "1",
    slug: "the_wind_rises",
    title: "The Wind Rises",
    year: 2013,
    genres: "Animation, Biography, Drama",
    japaneseTitle: "風立ちぬ",
    gradient: "from-emerald-400 to-cyan-400",
  },
  {
    id: "2",
    slug: "howls_moving_castle",
    title: "Howl's Moving Castle",
    year: 2004,
    genres: "Animation, Adventure, Family",
    japaneseTitle: "ハウルの動く城",
    gradient: "from-yellow-200 to-amber-500",
  },
  {
    id: "3",
    slug: "spirited_away",
    title: "Spirited Away",
    year: 2001,
    genres: "Animation, Adventure, Family",
    japaneseTitle: "千と千尋の神隠し",
    gradient: "from-red-500 to-orange-500",
  },
  {
    id: "4",
    slug: "porco_rosso",
    title: "Porco Rosso",
    year: 1992,
    genres: "Animation, Adventure, Comedy",
    japaneseTitle: "紅の豚",
    gradient: "from-amber-500 to-pink-500",
  },
  {
    id: "5",
    slug: "princess_mononoke",
    title: "Princess Mononoke",
    year: 1997,
    genres: "Animation, Adventure, Fantasy",
    japaneseTitle: "もののけ姫",
    gradient: "from-amber-500 to-lime-700",
  },
  {
    id: "6",
    slug: "my_neighbor_totoro",
    title: "My Neighbor Totoro",
    year: 1988,
    genres: "Animation, Comedy, Family",
    japaneseTitle: "となりのトトロ",
    gradient: "from-sky-200 to-sky-600",
  },
  {
    id: "7",
    slug: "grave_of_the_fireflies",
    title: "Grave of the Fireflies",
    year: 1988,
    genres: "Animation, Drama, War",
    japaneseTitle: "火垂るの墓",
    gradient: "from-blue-800 to-blue-300",
  },
  {
    id: "8",
    slug: "castle_in_the_sky",
    title: "Castle in the Sky",
    year: 1986,
    genres: "Animation, Adventure, Family",
    japaneseTitle: "天空の城ラピュタ",
    gradient: "from-yellow-200 to-pink-500",
  },
  {
    id: "9",
    slug: "kikis_delivery_service",
    title: "Kiki's Delivery Service",
    year: 1989,
    genres: "Family, Adventure, Fantasy",
    japaneseTitle: "魔女の宅急便",
    gradient: "from-purple-500 to-blue-800",
  },
];

function MoviePoster({ movie }) {
  const videoRef = useRef(null);
  const [active, setActive] = useState(false);

  const videoSrc = clip(movie.slug);
  const posterSrc = poster(movie.slug);

  const start = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!videoSrc) return; // guard against missing mp4
    setActive(true);
    videoRef.current?.play().catch(() => {});
  };

  const stop = () => {
    setActive(false);
    videoRef.current?.pause();
  };

  return (
    <div className="w-1/3" onMouseEnter={start} onMouseLeave={stop}>
      <div className="relative transition-transform hover:scale-110 motion-reduce:transform-none">
        <img
          className="object-cover object-center w-full h-full rounded-full shadow"
          src={posterSrc}
          alt={`${movie.title} poster`}
          loading="lazy"
          decoding="async"
        />
        {videoSrc && (
          <video
            ref={videoRef}
            className={`absolute top-0 left-0 object-cover object-center w-full h-full rounded-full transition-opacity ${
              active ? "opacity-100" : "opacity-0"
            }`}
            src={videoSrc}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
          />
        )}
      </div>
    </div>
  );
}

MoviePoster.propTypes = {
  movie: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

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
        const isReversed = Number(movie.id) % 2 === 0;
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
                <p className="mt-4 italic lg:text-md">{movie.genres}</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-1/3">
              <div
                lang="ja"
                className="font-bold leading-tight text-center text-black lg:text-3xl font-noto writing-mode-vertical md:text-xl"
              >
                <span className="sr-only">{movie.japaneseTitle}</span>
                <span aria-hidden="true">
                  {movie.japaneseTitle.split("").map((char, idx) => (
                    <span key={idx}>
                      {char}
                      <br />
                    </span>
                  ))}
                </span>
              </div>
            </div>
            <MoviePoster movie={movie} />
          </div>
        );
      })}
    </>
  );

  return (
    <section className="py-10 lg:py-10 bg-stone-100" id="movies">
      <div className="max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-8 text-center">
          <span className="text-sm text-gray-600 uppercase">Masterpieces</span>
          <h2 className="mt-2 text-3xl font-black text-gray-700 border-b-4 border-pink-500 font-oregano md:text-5xl">
            Movies
          </h2>
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
