import React from "react";
import NavbarHome from "./assets/components/Navbar-homepage";

export default function App() {
  return (
    <body className="m-0 p-0 font-inter tracking-tight">
      <NavbarHome />
      <div className="absolute h-screen bg-secondary-200 w-96 top-0 left-0 z-50 hidden"></div>

      <section className="bg-gradient-to-r from-primary-200 w-full h-[75vh] relative overflow-hidden flex items-center">
        <img
          className="absolute top-0 left-0 min-w-full min-h-fit -z-10"
          src="https://images.unsplash.com/photo-1541473211644-5cb06d3c68ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="artist"
        />
        <div className="mx-20 max-w-3xl space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl text-secondary-100 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="text-secondary-300 font-light max-w-xl">
              Vel nobis sequi tenetur? Voluptatem placeat tenetur corporis quo
              dignissimos esse, tempora perspiciatis dolorum sint qui.
            </p>
          </div>
          <button className="rounded-full bg-accent-300 w-36 h-12 text-secondary-250 font-semibold hover:bg-accent-400 ease-linear duration-100">
            Mua vé
          </button>
        </div>
      </section>

      <main className="p-16">
        <div className="mb-10 text-4xl">
          <h2 className="font-bold">Sự kiện đặc sắc</h2>
          <p className="w-24 h-2 mt-3 bg-accent-200 rounded-full"></p>
        </div>

        <section className="grid grid-cols-2 gap-x-12 gap-y-16 border-b pb-20">
          <div className="flex-col cursor-pointer">
            <img
              className="rounded-lg drop-shadow-xl hover:scale-105 duration-200 ease-linear"
              src="https://www.nme.com/wp-content/uploads/2021/06/redvelvet-psycho-2019.jpg"
              alt=""
            />

            <div className="mt-8 space-y-2">
              <p className="text-primary-50 font-medium text-lg">Âm nhạc</p>
              <h2 className="text-primary-200 font-bold text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h2>
            </div>
          </div>
          <div className="flex-col cursor-pointer">
            <img
              className="rounded-lg drop-shadow-xl hover:scale-105 duration-200 ease-linear"
              src="https://www.nme.com/wp-content/uploads/2021/06/redvelvet-psycho-2019.jpg"
              alt=""
            />
            <div className="mt-8 space-y-2">
              <p className="text-primary-50 font-medium text-lg">Âm nhạc</p>
              <h2 className="text-primary-200 font-bold text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h2>
            </div>
          </div>
          <div className="flex-col cursor-pointer">
            <img
              className="rounded-lg drop-shadow-xl hover:scale-105 duration-200 ease-linear"
              src="https://www.nme.com/wp-content/uploads/2021/06/redvelvet-psycho-2019.jpg"
              alt=""
            />
            <div className="mt-8 space-y-2">
              <p className="text-primary-50 font-medium text-lg">Âm nhạc</p>
              <h2 className="text-primary-200 font-bold text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h2>
            </div>
          </div>
          <div className="flex-col cursor-pointer">
            <img
              className="rounded-lg drop-shadow-xl hover:scale-105 duration-200 ease-linear"
              src="https://www.nme.com/wp-content/uploads/2021/06/redvelvet-psycho-2019.jpg"
              alt=""
            />
            <div className="mt-8 space-y-2">
              <p className="text-primary-50 font-medium text-lg">Âm nhạc</p>
              <h2 className="text-primary-200 font-bold text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h2>
            </div>
          </div>
        </section>

        <div className="mb-10 text-4xl mt-12">
          <h2 className="font-bold">Nổi bật</h2>
          <p className="w-24 h-2 mt-3 bg-accent-200 rounded-full"></p>
        </div>

        <div className="flex flex-col bg-white">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex">
              <div className="inline-block cursor-pointer">
                <div className="h-64 w-96 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    className="object-cover h-full"
                    src="https://www.nme.com/wp-content/uploads/2021/06/redvelvet-psycho-2019.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-8 space-y-2">
                  <p className="text-primary-50 font-medium text-lg">Âm nhạc</p>
                  <h2 className="text-primary-200 font-bold text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h2>
                </div>
              </div>
              <div className="inline-block px-3 cursor-pointer">
                <div className="h-64 w-96 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    className="object-cover h-full"
                    src="https://www.nme.com/wp-content/uploads/2021/06/redvelvet-psycho-2019.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-8 space-y-2">
                  <p className="text-primary-50 font-medium text-lg">Âm nhạc</p>
                  <h2 className="text-primary-200 font-bold text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h2>
                </div>
              </div>
              <div className="inline-block px-3 cursor-pointer">
                <div className="h-64 w-96 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    className="object-cover h-full"
                    src="https://www.nme.com/wp-content/uploads/2021/06/redvelvet-psycho-2019.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-8 space-y-2">
                  <p className="text-primary-50 font-medium text-lg">Âm nhạc</p>
                  <h2 className="text-primary-200 font-bold text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h2>
                </div>
              </div>
              <div className="inline-block px-3 cursor-pointer">
                <div className="h-64 w-96 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    className="object-cover h-full"
                    src="https://www.nme.com/wp-content/uploads/2021/06/redvelvet-psycho-2019.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-8 space-y-2">
                  <p className="text-primary-50 font-medium text-lg">Âm nhạc</p>
                  <h2 className="text-primary-200 font-bold text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <div className="mb-10 text-4xl">
            <h2 className="font-bold">Khám phá</h2>
            <p className="w-24 h-2 mt-3 bg-accent-200 rounded-full"></p>
          </div>

          <section className="grid grid-cols-2 gap-x-12 gap-y-16 border-b pb-20">
            <div className="flex-col cursor-pointer">
              <img
                className="rounded-lg drop-shadow-xl hover:scale-105 duration-200 ease-linear"
                src="https://www.nme.com/wp-content/uploads/2021/06/redvelvet-psycho-2019.jpg"
                alt=""
              />
              <div className="mt-8 space-y-2">
                <p className="text-primary-50 font-medium text-lg">Âm nhạc</p>
                <h2 className="text-primary-200 font-bold text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h2>
                <p className="pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  ex maiores nostrum odio. Hic sit omnis, labore sed aliquam
                  quae at natus consequuntur provident excepturi delectus nisi
                  reprehenderit temporibus voluptates!
                </p>
                <a href="#" className="text-accent-300 underline font-medium">
                  Khám phá thêm
                </a>
              </div>
            </div>
            <div className="flex-col cursor-pointer">
              <img
                className="rounded-lg drop-shadow-xl hover:scale-105 duration-200 ease-linear"
                src="https://www.nme.com/wp-content/uploads/2021/06/redvelvet-psycho-2019.jpg"
                alt=""
              />
              <div className="mt-8 space-y-2">
                <p className="text-primary-50 font-medium text-lg">Âm nhạc</p>
                <h2 className="text-primary-200 font-bold text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h2>
                <p className="pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  ex maiores nostrum odio. Hic sit omnis, labore sed aliquam
                  quae at natus consequuntur provident excepturi delectus nisi
                  reprehenderit temporibus voluptates!
                </p>
                <a href="#" className="text-accent-300 underline font-medium">
                  Khám phá thêm
                </a>
              </div>
            </div>
            <div className="flex-col cursor-pointer">
              <img
                className="rounded-lg drop-shadow-xl hover:scale-105 duration-200 ease-linear"
                src="https://www.nme.com/wp-content/uploads/2021/06/redvelvet-psycho-2019.jpg"
                alt=""
              />
              <div className="mt-8 space-y-2">
                <p className="text-primary-50 font-medium text-lg">Âm nhạc</p>
                <h2 className="text-primary-200 font-bold text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h2>
                <p className="pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  ex maiores nostrum odio. Hic sit omnis, labore sed aliquam
                  quae at natus consequuntur provident excepturi delectus nisi
                  reprehenderit temporibus voluptates!
                </p>
                <a href="#" className="text-accent-300 underline font-medium">
                  Khám phá thêm
                </a>
              </div>
            </div>
            <div className="flex-col cursor-pointer">
              <img
                className="rounded-lg drop-shadow-xl hover:scale-105 duration-200 ease-linear"
                src="https://www.nme.com/wp-content/uploads/2021/06/redvelvet-psycho-2019.jpg"
                alt=""
              />
              <div className="mt-8 space-y-2">
                <p className="text-primary-50 font-medium text-lg">Âm nhạc</p>
                <h2 className="text-primary-200 font-bold text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h2>
                <p className="pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  ex maiores nostrum odio. Hic sit omnis, labore sed aliquam
                  quae at natus consequuntur provident excepturi delectus nisi
                  reprehenderit temporibus voluptates!
                </p>
                <a href="#" className="text-accent-300 underline font-medium">
                  Khám phá thêm
                </a>
              </div>
            </div>
          </section>
        </section>
      </main>

      <footer aria-label="Site Footer" className="bg-primary-200">
        <div className="max-w-screen-xl px-20 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8 ml-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-secondary-100 font-extrabold tracking-tighter text-2xl">
                <h2>Ticketfast</h2>
              </div>

              <p className="max-w-xs mt-4 text-secondary-350 text-sm font-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                non cupiditate quae nam molestias.
              </p>

              <ul className="flex gap-6 mt-8">
                <li className="bg-primary-300 w-10 h-10 rounded-full flex justify-center">
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-secondary-200 transition hover:opacity-75 flex items-center"
                  >
                    <span className="sr-only">Facebook</span>

                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li className="bg-primary-300 w-10 h-10 rounded-full flex justify-center">
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-secondary-200 transition hover:opacity-75 flex items-center"
                  >
                    <span className="sr-only">Instagram</span>

                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li className="bg-primary-300 w-10 h-10 rounded-full flex justify-center">
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-secondary-200 transition hover:opacity-75 flex items-center"
                  >
                    <span className="sr-only">Twitter</span>

                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3 mt-16 lg:mt-0">
              <div>
                <p className="font-medium text-secondary-100">Services</p>

                <nav className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-secondary-350 transition hover:opacity-75"
                      >
                        1on1 Coaching
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-secondary-350 transition hover:opacity-75"
                      >
                        Company Review
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-secondary-350 transition hover:opacity-75"
                      >
                        Accounts Review
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-secondary-350 transition hover:opacity-75"
                      >
                        HR Consulting
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-secondary-350 transition hover:opacity-75"
                      >
                        SEO Optimisation
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <p className="font-medium text-secondary-100">Company</p>
                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-secondary-350 transition hover:opacity-75"
                      >
                        About
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-secondary-350 transition hover:opacity-75"
                      >
                        Meet the Team
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-secondary-350 transition hover:opacity-75"
                      >
                        Accounts Review
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <p className="font-medium text-secondary-100">Helpful Links</p>

                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-secondary-350 transition hover:opacity-75"
                      >
                        Contact
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-secondary-350 transition hover:opacity-75"
                      >
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-secondary-350 transition hover:opacity-75"
                      >
                        Live Chat
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <p className="text-xs text-secondary-350">
            &copy; 2022. Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </body>
  );
}
