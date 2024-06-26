import StudioGhibliArt from "../assets/about/StudioGhibliArt.jpg";

export default function About() {
  return (
    <section className="py-10 lg:py-20 bg-stone-100" id="about">
      <div className="max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap">
          {/* Left column for text content */}
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="lg:max-w-lg">
              {/* Section title */}
              <div className="px-4 pl-4 mb-6 border-l-4 border-cyan-500">
                <span className="text-sm text-gray-600 uppercase">
                  About Our Story
                </span>
                <h1 className="mt-2 text-3xl font-black font-oregano text-gray-700 md:text-5xl">
                  Discovering Ghibli Magic
                </h1>
              </div>
              {/* Main content paragraph */}
              <p className="px-4 mb-5 text-base leading-7 text-gray-500">
                Hey there ૮ ˶ᵔ ᵕ ᵔ˶ ა! Let&apos;s dive into the magical world of
                Studio Ghibli 🌱, co-founded in &apos;85 by the dynamic duo of
                animated wonders, <strong>Isao Takahata</strong> and{" "}
                <strong>Hayao Miyazaki</strong>.
              </p>
              <p className="px-4 mb-5 text-base leading-7 text-gray-500">
                This powerhouse has crafted twenty-two awe-inspiring films.
                Think box office gold—most of their creations soared to the top
                in Japan. <strong>SPIRITED AWAY</strong>, directed by Miyazaki
                in 2001, holds the record as Japan&apos;s highest-grossing film,
                earning over 30 billion yen! 💸
              </p>
              <p className="px-4 mb-5 text-base leading-7 text-gray-500">
                But it&apos;s not just about the numbers. Ghibli films are a
                magnet for awards and acclaim. <strong>SPIRITED AWAY</strong>{" "}
                clinched the Golden Bear at the 2002 Berlin International Film
                Festival and bagged the 2002 Academy Award for{" "}
                <strong>Best Animated Feature Film</strong>. Adding a touch of
                magic to reality, they teamed up to create the{" "}
                <strong>Ghibli Museum</strong> in 2001, a whimsical creation in
                Mitaka designed by the legendary Miyazaki.
              </p>
              <p className="px-4 mb-5 text-base leading-7 text-gray-500">
                Zooming into the present, Studio Ghibli continues to dominate.
                Their last four films—<strong>THE WIND RISES (2013)</strong>,{" "}
                <strong>THE TALE OF THE PRINCESS KAGUYA (2013)</strong>,{" "}
                <strong>THE RED TURTLE (2016)</strong>—nailed four consecutive
                Academy Award nominations.
              </p>
              <p className="px-4 mb-5 text-base leading-7 text-gray-500">
                <strong>The Studio Ghibli Collection</strong> is a treasure
                trove of timeless masterpieces. Each film is a unique and
                unforgettable journey, capturing the heart and soul of humanity.
                And the magic doesn&apos;t stop—there&apos;s a new Ghibli
                masterpiece in the works! Stay tuned for more enchanting tales!
                ✨
              </p>
            </div>
          </div>
          {/* Right column for the image */}
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 relative overflow-hidden">
            <img
              src={StudioGhibliArt}
              alt="Studio Ghibli Art"
              className="object-cover w-full h-full rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
