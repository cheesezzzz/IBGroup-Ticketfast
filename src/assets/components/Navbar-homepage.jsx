export default function NavbarHome() {
  return (
    <div>
      <header className="w-full h-12 bg-accent-400 px-20 py-8 flex-col lg:flex-row flex justify-center items-center space-y-1 space-x-2 lg:space-y-0">
        <p className="text-secondary-250 text-center font-light text-xs md:text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, autem accusantium. Quae soluta saepe.
        </p>
        <button className="bg-primary-200 text-secondary-100 w-7 h-7 rounded-full">
          <p className="font-extralight text-sm">X</p>
        </button>
      </header>

      <nav className="w-full h-20 bg-secondary-100 shadow-md flex items-center justify-between px-20 space-x-10">
        <div className="md:hidden">
          <button
            id="hamburger-btn"
            className="flex cursor-pointer relative items-center transition duration-500 ease-in-out w-10 h-7"
          >
            <div className="line-1 absolute hamburger-0 w-8 h-[0.16rem] bg-primary-300 transition rounded-full duration-200 -translate-y-2"></div>
            <div className="absolute hamburger w-8 h-[0.16rem] bg-primary-300 transition rounded-full duration-200"></div>
            <div className="absolute hamburger-2 w-8 h-[0.16rem] bg-primary-300 transform transition-transform rounded-full duration-200 translate-y-2"></div>
          </button>
        </div>
        <div>
          <a href="#">
            <h1 className="font-extrabold tracking-tighter text-2xl">
              Ticketfast
            </h1>
          </a>
        </div>
        <form className="w-[40rem] hidden md:block">
          <div className="flex">
            <button
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-primary-100 bg-secondary-250 rounded-l-lg hover:bg-secondary-300 ease-linear duration-100"
              type="button"
            >
              Âm nhạc
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="relative w-full">
              <input
                type="search"
                className="block p-3 w-full z-20 text-sm text-secondary-100 bg-secondary-200 rounded-r-lg border-secondary-300 border-l-2"
                placeholder="Tìm kiếm"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-3 text-sm font-medium text-white bg-transparent rounded-r-lg hover:bg-secondary-200 focus:ring-4 focus:outline-none"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="#000"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>

        <div className="hidden lg:flex items-center space-x-2">
          <button className="bg-transparent border-2 border-primary-300 text-primary-300 text-center rounded-lg w-28 h-10 font-medium hover:bg-black hover:text-secondary-100 duration-150 ease-in-out">
            Đăng nhập
          </button>
          <button className="bg-black text-secondary-100 text-center rounded-lg w-24 h-10 font-medium hover:bg-secondary-100 hover:bg-transparent hover:border-2 hover:border-primary-300 hover:text-primary-300 duration-150 ease-in-out">
            Đăng ký
          </button>
        </div>

        <button className="p-2 bg-secondary-200 flex justify-center items-center rounded-lg lg:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8313 12.6049C17.3081 13.303 18.5673 14.3894 19.4741 15.7481C20.381 17.1067 20.9012 18.6863 20.9793 20.3179C20.9896 20.4674 20.97 20.6174 20.9215 20.7592C20.873 20.901 20.7967 21.0316 20.6971 21.1435C20.5974 21.2554 20.4764 21.3462 20.3412 21.4107C20.2059 21.4752 20.0592 21.512 19.9095 21.519C19.7599 21.526 19.6103 21.503 19.4696 21.4514C19.329 21.3998 19.2 21.3207 19.0904 21.2186C18.9807 21.1165 18.8926 20.9935 18.8311 20.8569C18.7696 20.7202 18.736 20.5727 18.7323 20.4229C18.6506 18.6897 17.9045 17.0546 16.649 15.8569C15.3935 14.6592 13.725 13.991 11.9898 13.991C10.2547 13.991 8.5862 14.6592 7.3307 15.8569C6.07519 17.0546 5.32911 18.6897 5.24734 20.4229C5.22714 20.7163 5.09286 20.9901 4.87327 21.1857C4.65368 21.3813 4.36624 21.4831 4.07249 21.4694C3.77874 21.4557 3.50204 21.3275 3.30165 21.1122C3.10126 20.897 2.9931 20.6119 3.00034 20.3179C3.07813 18.6864 3.59814 17.1068 4.50469 15.7482C5.41125 14.3896 6.67022 13.303 8.14684 12.6049C7.20036 11.8155 6.52004 10.7536 6.19842 9.56378C5.8768 8.37397 5.9295 7.11397 6.34934 5.95517C6.76918 4.79637 7.53579 3.79503 8.54489 3.08734C9.55398 2.37966 10.7566 2 11.9891 2C13.2216 2 14.4242 2.37966 15.4333 3.08734C16.4424 3.79503 17.209 4.79637 17.6288 5.95517C18.0487 7.11397 18.1014 8.37397 17.7798 9.56378C17.4581 10.7536 16.7778 11.8155 15.8313 12.6049ZM15.7398 7.99542C15.7398 7.00086 15.3448 6.04703 14.6415 5.34377C13.9382 4.64051 12.9844 4.24542 11.9898 4.24542C10.9953 4.24542 10.0415 4.64051 9.33819 5.34377C8.63493 6.04703 8.23984 7.00086 8.23984 7.99542C8.23984 8.98998 8.63493 9.94381 9.33819 10.6471C10.0415 11.3503 10.9953 11.7454 11.9898 11.7454C12.9844 11.7454 13.9382 11.3503 14.6415 10.6471C15.3448 9.94381 15.7398 8.98998 15.7398 7.99542Z"
              fill="black"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}
