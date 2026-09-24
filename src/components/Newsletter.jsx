import { useState } from "react";
import { Link } from "react-router-dom";

const BUTTONDOWN_USERNAME = "shemmee";

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4e6a3a] focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100";

export default function Newsletter() {
  const [honeypot, setHoneypot] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    if (honeypot) {
      event.preventDefault(); // silently drop it: don't tip off the bot
      return;
    }
    window.open(
      `https://buttondown.com/${BUTTONDOWN_USERNAME}`,
      "popupwindow",
      "scrollbars=yes,width=800,height=600"
    );
    setSubmitted(true);
  };

  return (
    <section className="py-10 bg-stone-100" id="newsletter">
      <div className="max-w-screen-xl px-6 py-16 mx-auto md:px-7">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-sm tracking-wide text-gray-600 uppercase">
            Stay in the loop
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-gray-900 font-oregano md:text-4xl">
            Subscribe to the newsletter
          </h2>
          <p className="mb-8 text-base font-medium text-gray-600 md:text-lg">
            An occasional note about what&apos;s new on GhibliGaze and Ghibli
            news worth knowing about. No spam, and you can unsubscribe at any
            time.
          </p>

          <form
            action={`https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`}
            method="post"
            target="popupwindow"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="embed" value="1" />

            <div className="flex flex-col gap-3 md:flex-row">
              <div className="flex-1 text-left">
                <label htmlFor="emailInput" className="sr-only">
                  Email address
                </label>
                <input
                  id="emailInput"
                  className={`w-full rounded-3xl border border-gray-500 bg-white px-6 py-3 leading-tight text-gray-900 placeholder-gray-600 shadow-sm focus-visible:border-[#4e6a3a] ${focus}`}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </div>

              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                }}
              >
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className={`rounded-3xl bg-[#4e6a3a] px-10 py-3 text-base font-medium text-stone-100 shadow transition-colors hover:bg-[#3f5630] active:bg-[#354a29] motion-reduce:transition-none md:w-auto ${focus}`}
              >
                Subscribe
              </button>
            </div>
          </form>

          {/* Always rendered so screen readers announce the text when it appears */}
          <p
            role="status"
            aria-live="polite"
            className="min-h-6 mt-4 text-sm font-medium text-[#3f5630]"
          >
            {submitted &&
              "Almost there! Finish subscribing in the window that just opened, then check your inbox to confirm."}
          </p>

          <p className="mt-2 text-sm leading-loose text-gray-600">
            We protect your data with care. Read our{" "}
            <Link
              to="/privacy-policy"
              className={`rounded-sm text-[#4e6a3a] underline underline-offset-4 hover:text-[#3f5630] ${focus}`}
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
