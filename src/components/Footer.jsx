import { Link } from "react-router-dom";
import { IoGlobeOutline } from "react-icons/io5";
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
import Logo from "../assets/ghibli_logo_black.png";

const OFFICIAL_WEBSITE = "https://ghibli.jp/";

const SOCIALS = [
  { label: "Ghibli USA on X", href: "https://x.com/GhibliUSA", Icon: FaXTwitter },
  {
    label: "Ghibli USA on Instagram",
    href: "https://www.instagram.com/ghibliusa/",
    Icon: FaInstagram,
  },
  {
    label: "Ghibli USA on Facebook",
    href: "https://www.facebook.com/GhibliUSA",
    Icon: FaFacebookF,
  },
];

const home = (hash) => ({ pathname: "/", hash });

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4e6a3a] focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100";

const underlineFx =
  "relative inline-block rounded-sm py-1 transition-colors duration-300 hover:text-[#4e6a3a] focus-visible:text-[#4e6a3a] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[#4e6a3a] after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none";
const linkClass = `${underlineFx} ${focus}`;

const iconClass = `inline-flex h-10 w-10 items-center justify-center rounded-full text-[#4e6a3a] transition-colors duration-300 hover:bg-stone-200 hover:text-[#3f5630] motion-reduce:transition-none ${focus}`;

export default function Footer() {
  return (
    <footer className="bg-stone-100">
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              to={home("#hero")}
              className={`inline-flex items-center rounded-md ${focus}`}
            >
              <img
                src={Logo}
                className="w-auto h-8"
                width="67"
                height="32"
                alt="GhibliGaze home"
                loading="lazy"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase font-oregano">
                GhibliGaze
              </h2>
              <ul className="font-medium text-gray-600">
                <li className="mb-1">
                  <Link to={home("#about")} className={linkClass}>
                    About
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to={home("#movies")} className={linkClass}>
                    Movies
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to={home("#news")} className={linkClass}>
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase font-oregano">
                Studio Ghibli
              </h2>
              <ul className="font-medium text-gray-600">
                <li className="mb-1">
                  <a
                    href={OFFICIAL_WEBSITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Official Website
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
                {SOCIALS.map(({ label, href }) => (
                  <li key={label} className="mb-2">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase font-oregano">
                Legal
              </h2>
              <ul className="font-medium text-gray-600">
                <li className="mb-1">
                  <Link to="/privacy-policy" className={linkClass}>
                    Privacy Policy &amp; Credits
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-center text-gray-600 sm:text-left">
            <span>
              &copy; {new Date().getFullYear()} GhibliGaze. Made with ♡︎ by{" "}
              <a
                href="https://github.com/s-shemmee"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold text-[#4e6a3a] underline hover:text-[#3f5630] rounded-sm ${focus}`}
              >
                shemmee
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </span>
          </div>

          <div className="flex justify-center gap-1">
            <a
              href={OFFICIAL_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className={iconClass}
            >
              <IoGlobeOutline className="w-5 h-5" aria-hidden="true" />
              <span className="sr-only">
                Studio Ghibli official website (opens in a new tab)
              </span>
            </a>
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={iconClass}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">{label} (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
