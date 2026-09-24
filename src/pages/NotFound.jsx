import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4e6a3a] focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100";

export default function NotFound() {
  const { pathname } = useLocation();

  useEffect(() => {
    const previous = document.title;
    document.title = "Page not found | GhibliGaze";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main
      id="not-found"
      className="relative flex min-h-[80svh] items-center overflow-hidden bg-stone-100 px-6 py-24"
    >
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none -right-24 -top-24 h-96 w-96 bg-[#8fb56f]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none -bottom-32 -left-24 h-96 w-96 bg-[#4e6a3a]/15 blur-3xl"
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <p className="text-xl text-gray-600 hero-rise font-hand">
          Oh no, you&apos;ve wandered off the path…
        </p>

        <p
          aria-hidden="true"
          className="hero-rise font-oregano text-[7rem] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#4e6a3a] to-[#6f9a52] sm:text-[10rem]"
          style={{ animationDelay: "100ms" }}
        >
          404
        </p>

        <h1
          className="mt-2 text-3xl font-bold text-gray-900 hero-rise font-oregano md:text-4xl"
          style={{ animationDelay: "200ms" }}
        >
          Page not found
        </h1>

        <p
          className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600 hero-rise sm:text-lg"
          style={{ animationDelay: "300ms" }}
        >
          We couldn&apos;t find{" "}
          <code className="px-1.5 py-0.5 text-sm text-gray-800 break-all rounded bg-stone-200">
            {pathname}
          </code>
          . It may have drifted away like a cloud. Let&apos;s get you back to
          somewhere familiar.
        </p>

        <div
          className="flex flex-col items-center justify-center gap-4 mt-8 hero-rise sm:flex-row"
          style={{ animationDelay: "400ms" }}
        >
          <Link
            to="/"
            className={`block rounded-3xl bg-[#4e6a3a] px-10 py-3 text-center text-base font-medium text-stone-100 shadow transition-colors hover:bg-[#3f5630] active:bg-[#354a29] motion-reduce:transition-none ${focus}`}
          >
            Back to home
          </Link>
          <Link
            to={{ pathname: "/", hash: "#movies" }}
            className={`relative inline-block rounded-sm py-1 text-base font-semibold text-gray-700 transition-colors duration-300 hover:text-[#4e6a3a] focus-visible:text-[#4e6a3a] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[#4e6a3a] after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none ${focus}`}
          >
            Browse the movies
          </Link>
        </div>
      </div>
    </main>
  );
}
