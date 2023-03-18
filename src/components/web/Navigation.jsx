export default () => {
  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8 fixed top-0 z-50 w-full"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Parkdale Brass</span>
          <img className="h-10 w-auto" src="./PB.png" alt="" />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Product
        </a>

        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Features
        </a>

        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Marketplace
        </a>

        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Company
        </a>
      </div>
    </nav>
  );
};
