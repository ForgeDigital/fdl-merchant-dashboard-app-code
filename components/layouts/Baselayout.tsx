import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface IBaselayout {
  children: React.ReactNode;
}

const Baselayout: React.FC<IBaselayout> = ({ children }) => {
  const router = useRouter();

  const currentRouteFinder = (route: string) => {
    if (route == router.pathname) return true;
    return false;
  };

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="fixed inset-0 flex z-40 md:hidden"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-white border-b bg-opacity-75"
          aria-hidden="true"
        ></div>

        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white border-b">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
            </div>
            <nav className="mt-5 px-2 space-y-1">
              <a
                href="#"
                className="bg-gray-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                <svg
                  className="text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Dashboard
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Team
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                Projects
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Calendar
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                Documents
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Reports
              </a>
            </nav>
          </div>
          <div className="flex-shrink-0 flex bg-gray-700 p-4">
            <a href="#" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="/logo.png"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-white">
                    Oliver Otchere
                  </p>
                  <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 w-14"></div>
      </div>

      <div
        className={`${
          open
            ? "hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0"
            : "hidden"
        }`}
      >
        <div className="flex-1 flex flex-col min-h-0 bg-white border-r ">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 border-b pb-5">
              <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              <Link
                href="/dashboard"
                className={`${
                  currentRouteFinder("/dashboard")
                    ? "text-[#8276fd]"
                    : "hover:text-[#8276fd]  text-[#60667f]"
                }   group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
              >
                <svg
                  className={`${
                    currentRouteFinder("/dashboard")
                      ? "text-[#8276fd]"
                      : "text-[#60667f]"
                  }  mr-3 flex-shrink-0 h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Dashboard
              </Link>

              <Link
                href="/videos"
                className={`${
                  currentRouteFinder("/videos")
                    ? "text-[#8276fd]"
                    : "hover:text-[#8276fd]  text-[#60667f]"
                }   group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${
                    currentRouteFinder("/videos")
                      ? "text-[#8276fd]"
                      : "text-[#60667f]"
                  }  mr-3 flex-shrink-0 h-6 w-6`}
                >
                  <path
                    strokeLinecap="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                Videos
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? "md:pl-64" : ""
        } flex flex-col flex-1 bg-[#f0f0f5]`}
      >
        <div className="sticky bg-white top-0 z-10  pl-1 pt-1 sm:pl-3 sm:pt-3 py-4">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 border rounded-full w-12 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setOpen((state) => !state)}
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>
        </div>
        <main className="flex-1 ">{children}</main>
      </div>
    </div>
  );
};

export default Baselayout;
