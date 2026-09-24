import { IoIosArrowRoundForward } from "react-icons/io";
import { news, LAST_UPDATED } from "../data/news";

const formatDate = (iso) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));

const featured = news.find((item) => item.featured) ?? news[0];
const others = news.filter((item) => item !== featured);

const focusLight =
  "rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4e6a3a] focus-visible:ring-offset-2";
const focusDark =
  "rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900";

export default function News() {
  if (!featured) {
    return null;
  }

  return (
    <section
      className="py-16 bg-stone-100 lg:py-24"
      id="news"
      aria-labelledby="news-title"
    >
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="flex flex-col items-center mb-10 text-center">
          <p className="text-sm tracking-wide text-gray-600 uppercase">News</p>
          <h2
            id="news-title"
            className="mt-2 text-3xl font-black text-gray-700 border-b-4 border-red-500 font-oregano md:text-5xl"
          >
            What’s New
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Featured story */}
          <article className="relative flex flex-col justify-end overflow-hidden text-gray-100 bg-gray-900 shadow-lg rounded-xl min-h-[24rem] lg:col-span-7">
            {featured.image && (
              <img
                src={featured.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 object-cover w-full h-full"
              />
            )}
            <div
              className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/20"
              aria-hidden="true"
            />

            <div className="relative p-6 sm:p-8">
              <p className="flex items-center gap-2 text-xs font-bold tracking-wide text-red-300 uppercase">
                <span className="relative flex w-2 h-2" aria-hidden="true">
                  <span className="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex w-2 h-2 bg-red-400 rounded-full" />
                </span>
                {featured.category}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-3 leading-7 text-gray-200">{featured.summary}</p>
              <p className="mt-4 text-sm text-gray-200">
                {featured.source}
                {featured.date && (
                  <>
                    {" "}
                    ·{" "}
                    <time dateTime={featured.date}>
                      {formatDate(featured.date)}
                    </time>
                  </>
                )}
              </p>

              <div className="flex flex-wrap items-center mt-5 gap-x-6 gap-y-3">
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 font-semibold text-white underline underline-offset-4 hover:text-red-200 ${focusDark}`}
                >
                  Read on {featured.source}
                  <span className="sr-only"> (opens in a new tab)</span>
                  <IoIosArrowRoundForward
                    className="w-6 h-6"
                    aria-hidden="true"
                  />
                </a>
                {featured.trailerUrl && (
                  <a
                    href={featured.trailerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 font-semibold text-gray-100 underline underline-offset-4 hover:text-red-200 ${focusDark}`}
                  >
                    Watch the trailer
                    <span className="sr-only"> (opens in a new tab)</span>
                    <IoIosArrowRoundForward
                      className="w-6 h-6"
                      aria-hidden="true"
                    />
                  </a>
                )}
              </div>

              {featured.imageCredit && (
                <p className="mt-4 text-xs text-gray-300">
                  Image: {featured.imageCredit}
                </p>
              )}
            </div>
          </article>

          {/* More stories */}
          <div className="lg:col-span-5">
            <h3 className="sr-only">More stories</h3>
            <ul className="divide-y divide-gray-300">
              {others.map((item) => (
                <li key={item.id} className="py-5 first:pt-0">
                  <article>
                    <p className="text-xs font-bold tracking-wide text-red-700 uppercase">
                      {item.category}
                    </p>
                    <h4 className="mt-1 font-serif text-lg text-gray-900">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:underline ${focusLight}`}
                      >
                        {item.title}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-gray-700">
                      {item.summary}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      {item.source}
                      {item.date && (
                        <>
                          {" "}
                          ·{" "}
                          <time dateTime={item.date}>
                            {formatDate(item.date)}
                          </time>
                        </>
                      )}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer note */}
        <div className="flex flex-col items-start justify-between gap-3 pt-6 mt-10 border-t border-gray-300 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-600">
            Last updated{" "}
            <time dateTime={LAST_UPDATED}>{formatDate(LAST_UPDATED)}</time>.
            Headlines link to their original sources.
          </p>
          <a
            href="https://gkids.com/news"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 text-sm font-bold tracking-wide text-gray-800 uppercase hover:underline ${focusLight}`}
          >
            More news at GKIDS
            <span className="sr-only"> (opens in a new tab)</span>
            <IoIosArrowRoundForward className="w-6 h-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
