import { useEffect } from "react";
import { Link } from "react-router-dom";

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4e6a3a] focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100";

const linkClass = `text-[#4e6a3a] underline hover:text-[#3f5630] rounded-sm ${focus}`;

const underlineFx =
  "relative inline-block rounded-sm py-1 text-[#4e6a3a] transition-colors duration-300 hover:text-[#3f5630] focus-visible:text-[#3f5630] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[#3f5630] after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none";
const backLinkClass = `${underlineFx} ${focus}`;

export default function PrivacyPolicy() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Privacy Policy & Credits | GhibliGaze";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="py-16 bg-stone-100" id="privacy-policy">
      <div className="max-w-screen-md px-6 mx-auto">
        <Link to="/" className={`mb-6 text-sm font-medium ${backLinkClass}`}>
          ← Back to home
        </Link>

        <h1 className="mb-2 text-3xl font-bold text-gray-900 font-oregano md:text-4xl">
          Privacy Policy &amp; Credits
        </h1>
        <p className="mb-8 text-sm text-gray-600">
          Last updated: September 24, 2026
        </p>

        <div className="space-y-8 prose text-gray-700 prose-stone max-w-none">
          <section aria-labelledby="owner">
            <h2 id="owner" className="mb-2 text-xl font-semibold text-gray-900">
              About this site
            </h2>
            <p>
              GhibliGaze is created, owned and maintained by{" "}
              <a
                href="https://github.com/s-shemmee"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                shemmee
              </a>
              . The source code is available on{" "}
              <a
                href="https://github.com/s-shemmee/GhibliGaze"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                GitHub
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="disclaimer">
            <h2
              id="disclaimer"
              className="mb-2 text-xl font-semibold text-gray-900"
            >
              Disclaimer
            </h2>
            <p>
              GhibliGaze is an independent, non-commercial fan project built
              as a personal coding portfolio piece. It is not affiliated
              with, endorsed by, or officially connected to Studio Ghibli in
              any way. All Studio Ghibli film titles, characters, artwork,
              and related trademarks belong to their respective owners. This
              site exists purely out of appreciation for Studio Ghibli&apos;s
              work and to demonstrate front-end development skills.
            </p>
          </section>

          <section aria-labelledby="data">
            <h2 id="data" className="mb-2 text-xl font-semibold text-gray-900">
              Data We Collect
            </h2>
            <p>
              The only personal data this site collects is your email
              address, and only if you choose to subscribe to the
              newsletter. That subscription is handled entirely by{" "}
              <a
                href="https://buttondown.com"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Buttondown
              </a>
              , a third-party email service. Your email is stored on their
              platform, not on any server run by this site. You can
              unsubscribe at any time using the link included in every
              email you receive.
            </p>
            <p>
              This site does not use tracking cookies or analytics that
              collect personal information. It stores one small preference
              in your browser (whether you turned the background music off)
              so your choice is remembered. That value never leaves your
              device.
            </p>
          </section>

          <section aria-labelledby="credits">
            <h2
              id="credits"
              className="mb-2 text-xl font-semibold text-gray-900"
            >
              Credits &amp; Attribution
            </h2>
            <p>
              This project uses images, video, and other assets sourced from
              third parties. Full credits:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>
                Hero background video by{" "}
                <a
                  href="https://www.artstation.com/curlscurly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Jasmin Habezai-Fekri
                </a>{" "}
                on ArtStation.
              </li>
              <li>
                Movie posters in the Movies section are from the Behance
                project <em>Posters: Studio Ghibli</em> by{" "}
                <a
                  href="https://www.behance.net/josephroman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Joseph K. Roman
                </a>
                .
              </li>
              <li>
                Additional credits are also listed in the project&apos;s{" "}
                <a
                  href="https://github.com/s-shemmee/GhibliGaze"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  README on GitHub
                </a>
                .
              </li>
            </ul>
          </section>

          <section aria-labelledby="contact">
            <h2
              id="contact"
              className="mb-2 text-xl font-semibold text-gray-900"
            >
              Contact
            </h2>
            <p>
              Questions about this policy, or a credit or removal request?
              Reach{" "}
              <a
                href="https://github.com/s-shemmee"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                shemmee on GitHub
              </a>{" "}
              and it will be handled promptly.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
