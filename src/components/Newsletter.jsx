export default function Newsletter() {
  return (
    <section className="py-10 lg:py-10 bg-stone-100" id="newletter">
      <div className="max-w-screen-xl mx-auto px-6 py-16 lg:py-16 md:px-7">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-sm text-gray-600 uppercase">
            Stay In the Loop
          </span>
          <h1 className="mb-4 text-3xl font-bold font-oregano leading-tight tracking-tighter text-gray-900 md:text-4xl">
            Subscribe to our newsletter
          </h1>
          <p className="mb-8 text-base font-medium text-gray-500 md:text-lg">
            Get exclusive updates, behind-the-scenes access, and early Studio
            Ghibli news. Join us for the magic!
          </p>
          <div className="flex flex-wrap pb-1">
            <div className="w-full mb-3 md:flex-1 md:mb-0 md:mr-4">
              <input
                id="emailInput"
                className="w-full px-4 py-3 leading-tight text-gray-700 placeholder-gray-500 border border-gray-200 rounded-md shadow-sm"
                type="email"
                name="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
                autoComplete="email"
                required
              />
            </div>
            <div className="w-full md:w-auto">
              <button
                type="submit"
                className="inline-block w-full px-4 py-3 font-medium leading-5 text-center text-white bg-[#618548] border border-transparent rounded-md shadow-sm hover:bg-[#4e6a3a]"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </div>
          </div>
          <p className="text-sm leading-loose text-center text-gray-500 lg:text-left lg:max-w-lg">
            We protect your data with care. Read our{" "}
            <a
              href="/privacy-policy"
              className="text-[#618548] underline hover:text-[#4e6a3a]"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
