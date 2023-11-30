export default function News() {
  return(
    <section className="py-10 lg:py-10 bg-stone-100 dark:bg-gray-800" id="news-section">
      <div className="max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
        {/* Section Title*/}
        <div className="text-center flex flex-col items-center mb-8">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
            News
          </span>
          <h1 className="mt-2 text-3xl font-black font-oregano text-gray-700 md:text-5xl border-b-4 border-yellow-500 dark:text-gray-300">
            What's New
          </h1>
        </div>
      </div>
    </section>
  );
}