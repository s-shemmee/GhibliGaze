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
                <a href="#">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] lg:h-[450px] transition duration-500   group-hover:origin-center hover:scale-105"
                      src="https://media.wired.co.uk/photos/64f8ce9745eea1aad84ccc6c/1:1/w_1038,h_1038,c_limit/Studio-Ghibli-Ranked-Culture-HERON_img_1.jpg"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <div className="mb-8">
                <a href="#">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src="https://assets-prd.ignimgs.com/2022/07/22/princess-mononoke-1658507340192.jpg"
                      alt="Princess Mononoke"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/3 ">
              <div className="mb-8 ">
                <a href="#">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src="https://www.cartoonbrew.com/wp-content/uploads/2021/04/fireflies_5-1280x600.jpg"
                      alt="Grave of the Fireflies"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-8 ">
                <a href="#">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] lg:h-[450px]  transition duration-500  group-hover:origin-center hover:scale-105"
                      src="https://i.insider.com/60f7d8112a723b0011e4f21b?width=700"
                      alt="Spirited Away"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/3 ">
              <div className="mb-8 ">
                <a href="#">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] lg:h-[450px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src="https://www.nme.com/wp-content/uploads/2018/08/ponyo.jpg"
                      alt="Ponyo"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-8 ">
                <a href="#">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src="https://studioghiblimovies.com/wp-content/uploads/2016/04/46394_my_neighbor_totoro_studio_ghibli.jpg"
                      alt="My Neighbor Totoro"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="w-full px-4 sm:w-1/3">
              <div className="mb-8 ">
                <a href="#">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] lg:h-[450px] transition duration-500   group-hover:origin-center hover:scale-105"
                      src="https://assets-prd.ignimgs.com/2022/07/22/howls-moving-castle-1658448130903.jpg"
                      alt="Howl's Moving Castle"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-8">
                <a href="#">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src="https://www.brightwalldarkroom.com/wp-content/uploads/2017/04/castleinthesky.jpg"
                      alt="Castle in the Sky"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/3 ">
              <div className="mb-8 ">
                <a href="#">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src="https://4.bp.blogspot.com/-EM7f6LPQGb0/U3VvFWW3WWI/AAAAAAAAKgg/4_vPo6nAo6g/s1600/nausicaa.jpg"
                      alt="Nausicaä of the Valley of the Wind"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-8 ">
                <a href="#">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] lg:h-[450px]  transition duration-500  group-hover:origin-center hover:scale-105"
                      src="https://assets-prd.ignimgs.com/2022/07/21/the-tale-of-the-princess-kaguya-2-1658447536074.jpg?"
                      alt="The Tale of the Princess Kaguya"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/3 ">
              <div className="mb-8 ">
                <a href="#">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] lg:h-[450px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src="https://assets-prd.ignimgs.com/2022/07/22/kikis-delivery-service-1658448111692.jpg"
                      alt="Kiki’s Delivery Service"
                    />
                  </div>
                </a>
              </div>
              <div className="mb-8 ">
                <a href="#">
                  <div className="relative mb-5 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-[250px] transition duration-500  group-hover:origin-center hover:scale-105"
                      src="https://assets-prd.ignimgs.com/2022/07/21/porco-rosso-1658447664115.jpg"
                      alt="Porco Rosso"
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
