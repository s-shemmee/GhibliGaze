import pic1 from "../assets/gallery/pic1.png";
import pic2 from "../assets/gallery/pic2.jpg";
import pic3 from "../assets/gallery/pic3.jpg";
import pic4 from "../assets/gallery/pic4.png";
import pic5 from "../assets/gallery/pic5.jpg";
import pic6 from "../assets/gallery/pic6.png";
import pic7 from "../assets/gallery/pic7.jpg";
import pic8 from "../assets/gallery/pic8.jpg";
import pic9 from "../assets/gallery/pic9.jpg";
import pic10 from "../assets/gallery/pic10.jpg";
import pic11 from "../assets/gallery/pic11.jpg";
import pic12 from "../assets/gallery/pic12.jpg";

export default function Gallery() {
  return (
    <section className="py-10 lg:py-10 bg-stone-100" id="gallery">
      <div className="max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
        {/* Section Title*/}
        <div className="text-center flex flex-col items-center mb-8">
          <span className="text-sm text-gray-600 uppercase">Our</span>
          <h1 className="mt-2 text-3xl font-black font-oregano text-gray-700 md:text-5xl border-b-4 border-green-500">
            Gallery
          </h1>
        </div>
        <div className="p-4 mx-auto max-w-7xl">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="w-full px-4 sm:w-1/3">
              <div className="mb-8 ">
                <a href="/">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] lg:h-[450px] transition duration-500   group-hover:origin-center hover:scale-105"
                      src={pic1}
                      alt="The Boy and the Heron"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-8">
                <a href="/">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src={pic2}
                      alt="Princess Mononoke"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/3 ">
              <div className="mb-8 ">
                <a href="/">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src={pic3}
                      alt="Grave of the Fireflies"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-8 ">
                <a href="/">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] lg:h-[450px]  transition duration-500  group-hover:origin-center hover:scale-105"
                      src={pic4}
                      alt="Spirited Away"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/3 ">
              <div className="mb-8 ">
                <a href="/">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] lg:h-[450px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src={pic5}
                      alt="Ponyo"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-8 ">
                <a href="/">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src={pic6}
                      alt="My Neighbor Totoro"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="w-full px-4 sm:w-1/3">
              <div className="mb-8 ">
                <a href="/">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] lg:h-[450px] transition duration-500   group-hover:origin-center hover:scale-105"
                      src={pic7}
                      alt="Howl's Moving Castle"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-8">
                <a href="/">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src={pic8}
                      alt="Castle in the Sky"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/3 ">
              <div className="mb-8 ">
                <a href="/">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src={pic9}
                      alt="Nausicaä of the Valley of the Wind"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-8 ">
                <a href="/">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] lg:h-[450px]  transition duration-500  group-hover:origin-center hover:scale-105"
                      src={pic10}
                      alt="The Tale of the Princess Kaguya"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/3 ">
              <div className="mb-8 ">
                <a href="/">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] lg:h-[450px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src={pic11}
                      alt="Kiki’s Delivery Service"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-8 ">
                <a href="/">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src={pic12}
                      alt="Porco Rosso"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
