import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoDribbble,
  IoLogoInstagram,
} from "react-icons/io5";
import Logo from "../assets/ghibli_logo_black.png";

export default function Footer() {
  return (
    <footer className="bg-stone-100">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={Logo} className="h-8 me-3" alt="Ghibli Studio Logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold font-oregano text-gray-900 uppercase">
                GhibliGaze
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-2">
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#movies" className="hover:underline">
                    Movies
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#news" className="hover:underline">
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold font-oregano text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-2">
                  <a
                    href="https://www.instagram.com/ghibliusa/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://twitter.com/GhibliUSA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    aria-label="Twitter"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.facebook.com/ghibliusa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    aria-label="Facebook"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold font-oregano text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-2">
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/terms-and-conditions" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <span className="text-sm text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} GhibliGaze. Made with ♡︎ by{" "}
            <a
              href="https://github.com/s-shemmee"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#618548]"
            >
              shemmee
            </a>
          </span>
          <div className="flex justify-center mt-4 sm:mt-0">
            <a
              href="https://www.instagram.com/ghibliusa/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#618548] hover:text-[#4e6a3a] mx-2"
              aria-label="Instagram"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://twitter.com/GhibliUSA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#618548] hover:text-[#4e6a3a] mx-2"
              aria-label="Twitter"
            >
              <IoLogoTwitter />
            </a>
            <a
              href="/"
              className="text-[#618548] hover:text-[#4e6a3a] mx-2"
              aria-label="Dribbble"
            >
              <IoLogoDribbble />
            </a>
            <a
              href="https://www.facebook.com/ghibliusa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#618548] hover:text-[#4e6a3a] mx-2"
              aria-label="Facebook"
            >
              <IoLogoFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
