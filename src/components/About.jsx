import art from "../assets/about/studio_ghibli_art.webp";
import artSmall from "../assets/about/studio_ghibli_art_640.webp";

const IMAGE_ALT =
  "Painted portrait of Hayao Miyazaki, an older man with gray hair and black glasses, with tiny Studio Ghibli characters such as Totoro, Kiki and Ponyo living on his face.";

const facts = [
  { label: "Studio founded", value: "1985" },
  { label: "Ghibli Museum opens", value: "2001" },
  { label: "Animated Feature Oscars", value: "2" },
];

export default function About() {
  return (
    <section
      className="py-16 bg-stone-100 lg:py-24"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="lg:max-w-xl">
            <div className="pl-4 mb-8 border-l-4 border-cyan-500">
              <p className="text-sm tracking-wide text-gray-600 uppercase">
                About Our Story
              </p>
              <h2
                id="about-title"
                className="mt-2 text-3xl font-black text-gray-700 font-oregano md:text-5xl"
              >
                Discovering Ghibli Magic
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-gray-700">
              <p>
                Hey there! <span aria-hidden="true">૮ ˶ᵔ ᵕ ᵔ˶ ა</span> Let’s
                dive into the magical world of Studio Ghibli{" "}
                <span aria-hidden="true">🌱</span>. The studio was founded in
                1985 by directors <strong>Hayao Miyazaki</strong> and{" "}
                <strong>Isao Takahata</strong>, together with producers{" "}
                <strong>Toshio Suzuki</strong> and{" "}
                <strong>Yasuyoshi Tokuma</strong>.
              </p>

              <p>
                Since then it has made more than twenty feature films, and many
                of them topped the box office in Japan.{" "}
                <cite className="font-semibold">Spirited Away</cite>, directed
                by Miyazaki in 2001, earned over 30 billion yen and stayed
                Japan’s highest-grossing film for close to two decades{" "}
                <span aria-hidden="true">💸</span>.
              </p>

              <p>
                The acclaim followed the numbers.{" "}
                <cite className="font-semibold">Spirited Away</cite> won the
                Golden Bear at the 2002 Berlin International Film Festival and
                the Academy Award for{" "}
                <strong>Best Animated Feature</strong> at the 2003 ceremony.
                In 2001 the studio also opened the{" "}
                <strong>Ghibli Museum</strong> in Mitaka, Tokyo, a whimsical
                building designed by Miyazaki himself.
              </p>

              <p>
                Later, four films in a row earned Best Animated Feature
                nominations:{" "}
                <cite className="font-semibold">The Wind Rises</cite>,{" "}
                <cite className="font-semibold">
                  The Tale of the Princess Kaguya
                </cite>
                ,{" "}
                <cite className="font-semibold">When Marnie Was There</cite>{" "}
                and <cite className="font-semibold">The Red Turtle</cite>. Then{" "}
                <cite className="font-semibold">The Boy and the Heron</cite>{" "}
                (2023) won the studio its second Oscar in 2024.
              </p>

              <p>
                <strong>The Studio Ghibli Collection</strong> is a treasure
                trove of timeless masterpieces. Each film is a unique and
                unforgettable journey, capturing the heart and soul of
                humanity. And the magic continues: Miyazaki is reportedly
                working on another feature, with no release date announced yet.
                Stay tuned! <span aria-hidden="true">✨</span>
              </p>
            </div>
          </div>

          {/* Image + quick facts */}
          <div className="w-full max-w-sm mx-auto lg:sticky lg:top-8">
            <img
              src={art}
              srcSet={`${artSmall} 640w, ${art} 970w`}
              sizes="(min-width: 400px) 384px, 100vw"
              alt={IMAGE_ALT}
              width="970"
              height="1370"
              className="w-full h-auto shadow-lg rounded-xl"
              loading="lazy"
              decoding="async"
            />

            <dl className="grid grid-cols-3 gap-3 mt-6 text-center">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col-reverse justify-end p-3 bg-white rounded-lg shadow-sm"
                >
                  <dt className="mt-1 text-sm leading-tight text-gray-600">
                    {fact.label}
                  </dt>
                  <dd className="text-2xl font-black text-cyan-800 font-oregano md:text-3xl">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
