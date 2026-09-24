import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const files = import.meta.glob("../assets/gallery/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

const thumb = (n) => files[`../assets/gallery/pic${n}.webp`];
const large = (n) => files[`../assets/gallery/pic${n}-large.webp`];

const items = [
  { n: 1, title: "The Boy and the Heron", tall: true },
  { n: 2, title: "Princess Mononoke" },
  { n: 3, title: "Grave of the Fireflies" },
  { n: 4, title: "Spirited Away", tall: true },
  { n: 5, title: "Ponyo", tall: true },
  { n: 6, title: "My Neighbor Totoro" },
  { n: 7, title: "Howl’s Moving Castle", tall: true },
  { n: 8, title: "Castle in the Sky" },
  { n: 9, title: "Nausicaä of the Valley of the Wind" },
  { n: 10, title: "The Tale of the Princess Kaguya", tall: true },
  { n: 11, title: "Kiki’s Delivery Service", tall: true },
  { n: 12, title: "Porco Rosso" },
];

// Two images per column
const columns = [0, 2, 4, 6, 8, 10].map((start) =>
  items.slice(start, start + 2)
);

if (import.meta.env.DEV) {
  items.forEach(({ n }) => {
    if (!thumb(n) || !large(n)) {
      console.warn(`Gallery: missing WebP files for pic${n}`);
    }
  });
}

const LIGHTBOX_BTN =
  "absolute z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white";

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const current = selected === null ? null : items[selected];

  const close = () => setSelected(null);
  const showPrev = () =>
    setSelected((i) => (i === null ? i : (i + items.length - 1) % items.length));
  const showNext = () =>
    setSelected((i) => (i === null ? i : (i + 1) % items.length));

  const onKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  return (
    <section
      className="py-16 bg-stone-100 lg:py-24"
      id="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="flex flex-col items-center mb-10 text-center">
          <p className="text-sm tracking-wide text-gray-600 uppercase">
            A closer look
          </p>
          <h2
            id="gallery-title"
            className="mt-2 text-3xl font-black text-gray-700 border-b-4 border-green-500 font-oregano md:text-5xl"
          >
            Gallery
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4 lg:gap-6">
              {column.map((item) => (
                <button
                  key={item.n}
                  type="button"
                  onClick={() => setSelected(item.n - 1)}
                  aria-label={`Enlarge image: ${item.title}`}
                  aria-haspopup="dialog"
                  className="block overflow-hidden rounded-lg group focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4e6a3a] focus-visible:ring-offset-2"
                >
                  <img
                    className={`object-cover w-full aspect-[4/3] transition-transform duration-500 motion-safe:group-hover:scale-105 motion-safe:group-focus-visible:scale-105 motion-reduce:transition-none ${
                      item.tall ? "lg:aspect-[5/6]" : ""
                    }`}
                    src={thumb(item.n)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={current !== null} onClose={close} className="relative z-50">
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel
            className="relative w-full max-w-4xl"
            onKeyDown={onKeyDown}
          >
            <Dialog.Title className="sr-only">
              {current?.title ?? "Image viewer"}
            </Dialog.Title>

            <div className="relative">
              <img
                src={current ? large(current.n) : undefined}
                alt=""
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />

              <button
                type="button"
                onClick={close}
                aria-label="Close image viewer"
                className={`${LIGHTBOX_BTN} top-2 right-2`}
              >
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous image"
                className={`${LIGHTBOX_BTN} left-2 top-1/2 -translate-y-1/2`}
              >
                <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next image"
                className={`${LIGHTBOX_BTN} right-2 top-1/2 -translate-y-1/2`}
              >
                <ChevronRightIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            <p
              className="mt-3 text-sm text-center text-white"
              aria-live="polite"
            >
              {selected !== null ? selected + 1 : 0} of {items.length}
            </p>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}