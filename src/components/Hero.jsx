import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import whiteLogo from "../assets/ghibli_logo_white.png";
import blackLogo from "../assets/ghibli_logo_black.png";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Movies", href: "#movies" },
  { name: "Trailers", href: "#trailers" },
  { name: "Gallery", href: "#gallery" },
  { name: "News", href: "#news" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="bg-stone-100" id="hero">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        {/* Navigation */}
        <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#hero" className="-m-1.5 p-1.5">
              <span className="sr-only">GhibliGaze</span>
              <img
                className="h-10 w-auto"
                src={whiteLogo}
                alt="Ghibli Studio Logo"
                loading="lazy"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              aria-label="Open main menu"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation Links (Hidden on Small Screens) */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-label={`Navigate to ${item.name}`}
                className="text-sm font-semibold leading-6 text-white transition duration-300 hover:text-[#618548] focus:text-[#618548] focus:outline-none relative group"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#hero" className="-m-1.5 p-1.5">
                <span className="sr-only">GhibliGaze</span>
                <img
                  className="h-10 w-auto"
                  src={blackLogo}
                  alt="Ghibli Studio Logo"
                  loading="lazy"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Content */}
      <main className="relative">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://cdn.artstation.com/p/video_sources/000/146/133/2k.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-100"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <h1 className="font-oregano text-7xl md:text-8xl lg:text-9xl text-white font-extrabold mb-5">
              Gaze On{" "}
              <strong className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4e6a3a] to-[#618548]">
                GhibliGaze
              </strong>
            </h1>
            <p className="text-stone-100 text-lg max-w-lg">
              Celebrate the magic of Studio Ghibli with GhibliGaze – a
              mesmerizing adventure awaits. Immerse yourself in enchanting
              landscapes and captivating characters, as each frame unfolds a
              spellbinding tale.
            </p>
            <p className="text-stone-100 text-lg max-w-lg mt-5">
              Join us in the enchantment of GhibliGaze and experience the
              extraordinary world of Studio Ghibli like never before.
            </p>
            <div className="mt-8 flex items-center gap-4 text-center">
              <a
                href="#about"
                className="block rounded-3xl bg-[#618548] px-12 py-3 text-sm font-medium text-stone-100 shadow hover:bg-[#4e6a3a] focus:outline-none focus:ring active:bg-[#577841]"
              >
                Explore Now
              </a>
              <div className="flex flex-col items-center font-hand origin-top-left rotate-[10deg] ml-8">
                <p className="text-stone-100">
                  Get Ready
                  <br />
                  for Magic
                </p>
                <div className="ml-1">
                  <span className="text-stone-100">⤾</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
