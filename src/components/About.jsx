import React from 'react';

export default function About() {
  return (
    <section className="py-10 lg:py-20 bg-stone-100 dark:bg-gray-800">
      <div className="max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
        {/* Two-column layout with flex */}
        <div className="flex flex-wrap">
          {/* Left column for text content */}
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="lg:max-w-md">
              {/* Section title */}
              <div className="px-4 pl-4 mb-6 border-l-4 border-cyan-500">
                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                  About Our Story
                </span>
                <h1 className="mt-2 text-3xl font-black font-oregano text-gray-700 md:text-5xl dark:text-gray-300">
                  Discovering Ghibli Magic
                </h1>
              </div>
              {/* Main content paragraph */}
              <p className="px-4 mb-5 text-base leading-7 text-gray-500 dark:text-gray-400">
                Hey there ૮ ˶ᵔ ᵕ ᵔ˶ ა! Let's dive into the magical world of Studio Ghibli 🌱, co-founded in '85 by the dynamic duo of animated wonders, <strong>Isao Takahata</strong> and <strong>Hayao Miyazaki</strong>.
                <br />
                This powerhouse has crafted twenty-two awe-inspiring films. Think box office gold—most of their creations soared to the top in Japan, and SPIRITED AWAY, directed by Miyazaki in 2001, holds the record as Japan's highest-grossing film, earning over 30 billion yen! 💸
              </p>
              <p className="px-4 mb-5 text-base leading-7 text-gray-500 dark:text-gray-400">
                But it's not just about the numbers. Ghibli films are a magnet for awards and acclaim. <strong>SPIRITED AWAY</strong> clinched the Golden Bear at the 2002 Berlin International Film Festival and bagged the 2002 Academy Award for Best Animated Feature Film. Adding a touch of magic to reality, they teamed up to create the Ghibli Museum in 2001, a whimsical creation in Mitaka designed by the legendary Miyazaki.
              </p>
              <p className="px-4 mb-5 text-base leading-7 text-gray-500 dark:text-gray-400">
                Zooming into the present, Studio Ghibli continues to dominate. Their last four films—<strong>THE WIND RISES (2013)</strong>, <strong>THE TALE OF THE PRINCESS KAGUYA (2013)</strong>, <strong>WHEN MARNIE WAS THERE (2014)</strong>, and <strong>THE RED TURTLE (2016)</strong>—nailed four consecutive Academy Award nominations.
                <br></br>
                And the magic doesn't stop—there's a new Ghibli masterpiece in the works!🌠
              </p>
            </div>
          </div>
          {/* Right column for the image */}
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
          <img
            src="https://www.wallpaperflare.com/static/908/897/173/anime-studio-ghibli-man-black-wallpaper-preview.jpg"
            alt="about image"
            className="relative z-40 object-cover w-full h-full rounded-blur"
          />

          </div>
        </div>
      </div>
    </section>
  );
}
