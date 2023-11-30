export default function Trailers() {
  return (
    <section className="py-10 lg:py-20 bg-stone-100 dark:bg-gray-800" id="trailers-section">
      <div className="max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
        {/* Section Title*/}
        <div className="text-center flex flex-col items-center mb-8">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
            Trailers
          </span>
          <h1 className="mt-2 text-3xl font-black font-oregano text-gray-700 md:text-5xl border-b-4 border-yellow-500 dark:text-gray-300">
            Watch the Magic
          </h1>
        </div>
        <div className="grid gap-4 mt-8">
          <div className="rounded-lg border-8 border-yellow-500">
            <iframe width="100%" height="700" src="https://www.youtube.com/embed/HaLISMAGdOE?si=dgxIEbsp-GZkJosJ" title="MY NEIGHBOR TOTORO | Official English Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div className="rounded-lg border-4 border-yellow-500">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vf6c6n35wr4?si=CwF7i-PhXrm_1xtO" title="PRINCESS MONONOKE | Official English Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="rounded-lg border-4 border-yellow-500">
              <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/zaskbIZtfxQ?si=Xz0tbSrhUFwri392&amp;controls=0" title="NAUSICAÄ OF THE VALLEY OF THE WIND | Official English Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="rounded-lg border-4 border-yellow-500">
              <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/5lMRfLJGXSM?si=t0bKCbbDu7ilZ6nk&amp;controls=0" title="CASTLE IN THE SKY | Official English Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="rounded-lg border-4 border-yellow-500">
              <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/DJeUGpcle8s?si=K821BYCg5ViAOfmP&amp;controls=0" title="HOWL'S MOVING CASTLE | Official English Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="rounded-lg border-4 border-yellow-500">
              <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/t6-fT0hjTvc?si=a_5W5crW5LGPG0W2&amp;controls=0" title="KIKI'S DELIVERY SERVICE | Official English Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        {/* Call-to-Action */}
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 text-lg font-medium leading-6 text-center text-white transition duration-300 bg-yellow-500 rounded-md shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Watch More
          </a>
        </div>
      </div>
    </section>
  );
};
