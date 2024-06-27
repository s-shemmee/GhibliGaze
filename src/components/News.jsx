import { useState } from "react";
import PropTypes from "prop-types";
import { IoIosArrowRoundForward } from "react-icons/io";
import newsImage from "../assets/news/new_img.jpg";
import pic1 from "../assets/news/pic1.jpg";
import pic2 from "../assets/news/pic2.jpg";
import pic3 from "../assets/news/pic3.jpg";
import pic4 from "../assets/news/pic4.jpg";
import pic5 from "../assets/news/pic5.jpg";
import pic6 from "../assets/news/pic6.jpeg";

const Article = ({ category, title, time, author, authorLink }) => (
  <div className="flex flex-col space-y-2">
    <h3 className="flex items-center space-x-2 text-gray-400">
      <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-red-400"></span>
      <span className="text-xs font-bold tracking-wide uppercase">
        {category}
      </span>
    </h3>
    <p className="font-serif">{title}</p>
    <p className="text-xs text-gray-400">
      {time} by{" "}
      <a href={authorLink} className="hover:underline text-red-400">
        {author}
      </a>
    </p>
  </div>
);

Article.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorLink: PropTypes.string.isRequired,
};

const articles = {
  latest: [
    {
      category: "ANNOUNCEMENTS",
      title: "The Critically Acclaimed Hit Series “ARCANE”",
      time: "10 June",
      author: "GhibliGaze",
      authorLink: "#",
      image: pic4,
    },
    {
      category: "ACQUISITION",
      title: "Theatrical & Home Entertainment Rights to “DAN DA DAN”",
      time: "4 Jun",
      author: "GhibliGaze",
      authorLink: "#",
      image: pic5,
    },
    {
      category: "HOME VIDEO",
      title: "Director Mamoru Oshii’s Seminal Classic “ANGEL’S EGG",
      time: "29 MAY",
      author: "GhibliGaze",
      authorLink: "#",
      image: pic6,
    },
  ],
  popular: [
    {
      category: "ANNOUNCEMENTS",
      title: "GKIDS Acquires North American Rights to “Mars Express”",
      time: "26 Oct",
      author: "GhibliGaze",
      authorLink: "#",
      image: pic1,
    },
    {
      category: "THEATRICAL",
      title: "GKIDS to Release “Blue Giant” In Select Theaters Nationwide",
      time: "13 Sep",
      author: "GhibliGaze",
      authorLink: "#",
      image: pic2,
    },
    {
      category: "HOME VIDEO",
      title: "GKIDS To Release EVANGELION:3.0+1.11 THRICE UPON A TIME",
      time: "31 July",
      author: "GhibliGaze",
      authorLink: "#",
      image: pic3,
    },
  ],
};

export default function News() {
  const [activeTab, setActiveTab] = useState("latest");

  return (
    <section className="py-10 lg:py-10 bg-stone-100" id="news">
      <div className="max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
        {/* Section Title */}
        <div className="text-center flex flex-col items-center mb-8">
          <span className="text-sm text-gray-600 uppercase">News</span>
          <h1 className="mt-2 text-3xl font-black font-oregano text-gray-700 md:text-5xl border-b-4 border-red-500">
            What’s New
          </h1>
        </div>
        <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
          <div className="flex flex-col justify-between col-span-12 py-2 px-4 space-y-8 md:space-y-16 md:col-span-3">
            {/* Exclusive News */}
            <div className="flex flex-col space-y-8 md:space-y-12">
              <Article
                category="BEHIND THE SCENES"
                title="The Bright Future of Studio Ghibli: A New Beginning Under Nippon TV"
                time="2 months ago"
                author="GhibliGaze"
                authorLink="#"
              />
              <Article
                category="MOVIES"
                title="A New Venture Beyond “The Boy and the Heron”"
                time="3 months ago"
                author="GhibliGaze"
                authorLink="#"
              />
              <Article
                category="COOL GHIBLI STUFF"
                title="Don’t Miss: Studio Ghibli x UNIQLO’s New Must-Have Collab!"
                time="3 months ago"
                author="GhibliGaze"
                authorLink="#"
              />
            </div>
            {/* See more exclusives */}
            <div className="flex flex-col w-full space-y-2">
              <div className="flex w-full h-1 bg-opacity-10 bg-red-400">
                <div className="w-1/2 h-full bg-red-400"></div>
              </div>
              <a
                rel="noopener noreferrer"
                href="https://gkids.com/news"
                className="flex items-center justify-between w-full"
              >
                <span className="text-xs font-bold tracking-wide uppercase">
                  See more exclusives
                </span>
                <IoIosArrowRoundForward className="text-red-400" />
              </a>
            </div>
          </div>
          {/* Featured Article */}
          <div className="relative flex col-span-12 bg-cover bg-no-repeat bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96 m-2">
            <img
              src={newsImage}
              alt="Spirited Away Live"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-end p-6 text-center sm:p-8 group via-transparent flex-grow-1 bg-gradient-to-b from-gray-900 to-gray-900">
              <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 border-red-400 text-gray-100">
                Tokyo, Japan
              </span>
              <span className="flex items-center mb-4 space-x-2 text-red-400">
                <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-red-400">
                  <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-red-400"></span>
                </span>
                <span className="text-sm font-bold">Live</span>
              </span>
              <h1 className="font-serif text-2xl font-semibold group-hover:underline text-gray-100">
                Spirited Away: Live on Stage to Arrive on Digital and Blu-Ray™
              </h1>
            </div>
          </div>
          {/* Latest/Popular Articles (Hidden on Small Screens) */}
          <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
            {/* Article Filters */}
            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-red-400">
              <button
                type="button"
                className={`pb-5 text-xs font-bold tracking-wide uppercase ${
                  activeTab === "latest"
                    ? "border-b-2 border-red-400"
                    : "border-transparent text-gray-400"
                }`}
                onClick={() => setActiveTab("latest")}
              >
                Latest
              </button>
              <button
                type="button"
                className={`pb-5 text-xs font-bold tracking-wide uppercase ${
                  activeTab === "popular"
                    ? "border-b-2 border-red-400"
                    : "border-transparent text-gray-400"
                }`}
                onClick={() => setActiveTab("popular")}
              >
                Popular
              </button>
            </div>
            {/* Article List */}
            <div className="flex flex-col divide-y divide-gray-700">
              {articles[activeTab].map((article, index) => (
                <div key={index} className="flex px-1 py-4">
                  <img
                    alt={article.title}
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                    src={article.image}
                    loading="lazy"
                  />
                  <div className="flex flex-col flex-grow">
                    <p className="font-serif">{article.title}</p>
                    <div className="mt-2 text-xs text-gray-400">
                      <span>{article.time}</span>
                      <span className="block text-red-400 lg:ml-2 lg:inline hover:underline">
                        {article.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
