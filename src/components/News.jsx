import newsImage from "../assets/news/new_img.jpg";

export default function News() {
  return (
    <section className="py-10 lg:py-10 bg-stone-100" id="news">
      <div className="max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
        {/* Section Title*/}
        <div className="text-center flex flex-col items-center mb-8">
          <span className="text-sm text-gray-600 uppercase">News</span>
          <h1 className="mt-2 text-3xl font-black font-oregano text-gray-700 md:text-5xl border-b-4 border-red-500">
            What's New
          </h1>
        </div>
        <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
          <div className="flex flex-col justify-between col-span-12 py-2 px-4 space-y-8 md:space-y-16 md:col-span-3">
            {/* Exclusive News */}
            <div className="flex flex-col space-y-8 md:space-y-12">
              {/* Article 1 */}
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 text-gray-400">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-red-400"></span>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    BEHIND THE SCENES
                  </span>
                </h3>
                <p className="font-serif">
                  The Bright Future of Studio Ghibli: A New Beginning Under
                  Nippon TV
                </p>
                <p className="text-xs text-gray-400">
                  2 months ago by{" "}
                  <span className="hover:underline text-red-400">
                    GhibliGaze
                  </span>
                </p>
              </div>
              {/* Article 2 */}
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-c nter space-x-2 text-gray-400">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-red-400"></span>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    Movies
                  </span>
                </h3>
                <p className="font-serif">
                  A New Venture Beyond “The Boy and the Heron”
                </p>
                <p className="text-xs text-gray-400">
                  3 months ago by{" "}
                  <span className="hover:underline text-red-400">
                    GhibliGaze
                  </span>
                </p>
              </div>
              {/* Article 3 */}
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 text-gray-400">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-red-400"></span>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    COOL GHIBLI STUFF
                  </span>
                </h3>
                <p className="font-serif">
                  Don’t Miss: Studio Ghibli x UNIQLO’s New Must-Have Collab!
                </p>
                <p className="text-xs text-gray-400">
                  3 months ago by{" "}
                  <span className="hover:underline text-red-400">
                    GhibliGaze
                  </span>
                </p>
              </div>
            </div>
            {/* See more exclusives */}
            <div className="flex flex-col w-full space-y-2">
              <div className="flex w-full h-1 bg-opacity-10 bg-red-400">
                <div className="w-1/2 h-full bg-red-400"></div>
              </div>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center justify-between w-full"
              >
                <span className="text-xs font-bold tracking-wide uppercase">
                  See more exclusives
                </span>
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 stroke-current text-red-400"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
          {/* Featured Article */}
          <div className="relative flex col-span-12 bg-cover bg-no-repeat bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96">
            <img
              src={newsImage}
              alt="News Image"
              className="w-full h-full object-cover"
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
                className="pb-5 text-xs font-bold tracking-wide uppercase border-b-2 border-red-400"
              >
                Latest
              </button>
              <button
                type="button"
                className="pb-5 text-xs font-bold tracking-wide uppercase border-b-2 border-transparent text-gray-400"
              >
                Popular
              </button>
            </div>
            {/* Article List */}
            <div className="flex flex-col divide-y divide-gray-700">
              {/* Article 1 */}
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                  src="https://gkids.com/wp-content/uploads/2023/10/Exe_120x160_MarsExpress-UK_HD_pages-to-jpg-0001-230x300.jpg"
                />
                <div className="flex flex-col flex-grow">
                  <p className="font-serif">
                    GKIDS Acquires North American Rights to “Mars Express”
                  </p>
                  <div className="mt-2 text-xs text-gray-400">
                    <span>26 Oct</span>
                    <span className="block text-red-400 lg:ml-2 lg:inline hover:underline">
                      Announcements
                    </span>
                  </div>
                </div>
              </div>
              {/* Article 2 */}
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                  src="https://gkids.com/wp-content/uploads/2023/09/BG_sub04-768x432.jpg"
                />
                <div className="flex flex-col flex-grow">
                  <p className="font-serif">
                    GKIDS to Release “Blue Giant” In Select Theaters Nationwide
                  </p>
                  <div className="mt-2 text-xs text-gray-400">
                    <span>13 Sep</span>
                    <span className="block text-red-400 lg:ml-2 lg:inline hover:underline">
                      Theatrical
                    </span>
                  </div>
                </div>
              </div>
              {/* Article 3 */}
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                  src="https://gkids.com/wp-content/uploads/2023/07/Evangelion_3.01.01_Thrice_Upon_A_Time_1920x1080_Textless-768x432.jpg"
                />
                <div className="flex flex-col flex-grow">
                  <p className="font-serif">
                    GKIDS To Release EVANGELION:3.0+1.11 THRICE UPON A TIME
                  </p>
                  <div className="mt-2 text-xs text-gray-400">
                    <span>31 July</span>
                    <span className="block text-red-400 lg:ml-2 lg:inline hover:underline">
                      Home Video
                    </span>
                  </div>
                </div>
              </div>
              {/* Article 4 */}
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                  src="https://gkids.com/wp-content/uploads/2023/03/EAC2_Still_01_1920w_2023-03-01-768x414.jpg"
                />
                <div className="flex flex-col flex-grow">
                  <p className="font-serif">
                    GKIDS to Release “Ernest & Celestine: A Trip to Gibberitia”
                  </p>
                  <div className="mt-2 text-xs text-gray-400">
                    <span>24 June</span>
                    <span className="block text-red-400 lg:ml-2 lg:inline hover:underline">
                      Voice Cast
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
